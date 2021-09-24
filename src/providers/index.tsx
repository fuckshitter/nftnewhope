import { Component } from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { connect } from "react-redux";
import { RootState } from "store";
import { selectors } from "data";
import { LANGUAGES, LanguageType, DEFAULT_LANGUAGE } from "data/constants";
import {
  af,
  ar,
  ca,
  cs,
  da,
  de,
  el,
  en,
  es,
  fi,
  fr,
  he,
  hu,
  id,
  it,
  ja,
  ko,
  nl,
  no,
  pl,
  pt,
  ro,
  ru,
  sr,
  sv,
  tr,
  uk,
  vi,
  zh,
} from "make-plural/plurals";
import { any, propOr } from "ramda";

const plurals = {
  "af-ZA": af,
  "ar-SA": ar,
  "ca-ES": ca,
  "cs-CZ": cs,
  "da-DK": da,
  "de-DE": de,
  "el-GR": el,
  "en-US": en,
  "es-ES": es,
  "fi-FI": fi,
  "fr-FR": fr,
  "he-IL": he,
  "hu-HU": hu,
  "id-ID": id,
  "it-IT": it,
  "ja-JP": ja,
  "ko-KR": ko,
  "nl-NL": nl,
  "no-NO": no,
  "pl-PL": pl,
  "pt-BR": pt,
  "pt-PT": pt,
  "ro-RO": ro,
  "ru-RU": ru,
  "sr-SP": sr,
  "sv-SE": sv,
  "tr-TR": tr,
  "uk-UA": uk,
  "vi-VN": vi,
  "zh-CN": zh,
  "zh-TW": zh,
};

type ITranS = {
  locale: LanguageType["cultureCode"];
  loaded: boolean;
};

type ITranP = {
  locale: LanguageType["cultureCode"];
  children: React.ReactNode;
};

class TranslationsProvider extends Component<ITranP, ITranS> {
  constructor(props: ITranP) {
    super(props);
    this.state = {
      locale: DEFAULT_LANGUAGE,
      loaded: false,
    };
  }

  dynamicActivate = async (locale: LanguageType["cultureCode"]) => {
    const { messages } = await import(
      `@lingui/loader!../../assets/locales/${locale}.po`
    );
    i18n.loadLocaleData(locale, { plurals: () => plurals[locale] });
    i18n.load(locale, messages);
    i18n.activate(locale);
  };

  initializeLocale = (): void | null => {
    const locale = any(propOr(DEFAULT_LANGUAGE, this.props.locale), LANGUAGES)
      ? this.props.locale
      : DEFAULT_LANGUAGE;
    this.setState({ locale });

    this.dynamicActivate(locale)
      .then(() => {
        this.setState({ loaded: true });
      })
      .catch((error) => {
        console.error("Error activating locale", locale, error);
      });

    if (!this.state.loaded) return null;
  };

  componentDidUpdate(prevProps: ITranP) {
    if (this.props.locale !== prevProps.locale) this.initializeLocale();
  }

  render() {
    return (
      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        {this.props.children}
      </I18nProvider>
    );
  }
}

const mapStateToProp = (state: RootState) => ({
  locale: selectors.settings.getLanguage(state),
});

export default connect(mapStateToProp)(TranslationsProvider);

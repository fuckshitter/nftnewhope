// import { Action } from "redux";
import { LanguageType } from "data/constants";

export interface PreferencesState {
  language: LanguageType["cultureCode"];
  theme: string;
}

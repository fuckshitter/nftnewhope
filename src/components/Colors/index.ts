import { DefaultTheme } from "styled-components/macro";
import DarkTheme from "./DarkTheme";
import Default from "./Default";
import { Colors } from "./Colors";

export type ColorProps = {
  color: keyof DefaultTheme;
  theme: string;
};

const Color = ({ color, theme }: ColorProps): string => {
  switch (theme) {
    case "dark":
      return DarkTheme[color];

    default:
      return Default[color];
  }
};

const Palette = (theme: string): DefaultTheme => {
  switch (theme) {
    case "dark":
      return DarkTheme;
    case "lite":
      return Default;
    default:
      return Default;
  }
};

export { Color, Colors, Palette };

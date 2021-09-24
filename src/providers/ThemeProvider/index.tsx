import { ThemeProvider as CustomThemeProvider } from "styled-components/macro";
// import { merge } from "ramda";
// import { Palette } from "components/Colors";
import DarkTheme from "components/Colors/DarkTheme";
// import { createDeepEqual } from "utils/index";
// import { selectors } from "data";
import { ReactNode } from "react";

// const useTheme = createDeepEqual(
//   [selectors.settings.getTheme],
//   (themeName: string) => {
//     const oldTheme = Palette(themeName);
//     const newTheme: DefaultTheme = merge(Default, oldTheme);

//     return newTheme;
//   }
// );

export default function ThemeProvider({ children }: { children: ReactNode }) {
  // const currentTheme = selectors.settings.getTheme;

  return (
    <CustomThemeProvider theme={DarkTheme}>{children}</CustomThemeProvider>
  );
}

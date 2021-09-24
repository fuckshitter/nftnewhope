import * as AT from "./actionTypes";

export const setLanguage = (language: string) => ({
  payload: { language },
  type: AT.SET_LANGUAGE,
});

export const setTheme = (theme: string) => ({
  payload: { theme },
  type: AT.SET_THEME,
});

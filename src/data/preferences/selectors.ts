import { path } from "ramda";
import { RootState } from "store";

export const getLanguage = (state: RootState) => state.settings.language;
export const getTheme = (state: RootState) =>
  path(["settings", "theme"], state);

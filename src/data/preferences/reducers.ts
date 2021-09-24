import { PreferencesState } from "./types";
import { DEFAULT_LANGUAGE } from "data/constants";
import * as AT from "./actionTypes";

const INITIAL_STATE: PreferencesState = {
  language: DEFAULT_LANGUAGE,
  theme: "lite",
};

export const preferenceReducer = (
  state = INITIAL_STATE,
  action: any
): PreferencesState => {
  switch (action.type) {
    case AT.SET_LANGUAGE:
      const { language } = action.payload;
      return {
        ...state,
        language,
      };

    case AT.SET_THEME:
      const { theme } = action.payload;
      return {
        ...state,
        theme,
      };

    default:
      return { ...state };
  }
};

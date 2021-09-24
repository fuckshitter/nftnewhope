import { preferenceReducer } from "./preferences/reducers";

const rootReducer = {
  settings: preferenceReducer,
};

export default rootReducer;

import { createHashHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import { persistCombineReducers } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
// import storage from "redux-persist/lib/storage";
import { rootReducer } from "data";
// import persistStore from "redux-persist/es/persistStore";

const devToolsConfig = {
  blackListedActions: ["@CONNECT.APPROVE_TRANSFER"],
  maxAge: 1000,
};

const configuredStore = () => {
  const history = createHashHistory();
  const sagaMiddleware = createSagaMiddleware();

  // const whitelisted = ["settings"];

  // const persistedReducer = persistCombineReducers(
  //   {
  //     key: "root",
  //     storage,
  //     whitelist: whitelisted,
  //   },
  //   {
  //     router: connectRouter(history),
  //     ...rootReducer,
  //   }
  // );


  const store = configureStore({
    devTools: devToolsConfig,
    reducer: rootReducer,
    middleware: [sagaMiddleware, routerMiddleware(history)]
  });

  // const persistor = persistStore(store);

  return { store };
};

const combinedReducer = combineReducers(rootReducer);

export type RootState = ReturnType<typeof combinedReducer>;

export default configuredStore;

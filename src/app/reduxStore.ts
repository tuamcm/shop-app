import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import reduxReducer from "app/reduxReducer";
import reduxSaga from "app/reduxSaga";

const config = {
  key: "root",
  storage,
};

const reducer = persistReducer(config, reduxReducer);

const sagaMiddleware = createSagaMiddleware();

const reduxStore = configureStore({
  reducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(reduxSaga);

export const persistor = persistStore(reduxStore);

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;

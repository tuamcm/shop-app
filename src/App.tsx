import React from "react";
// import TestPage from "pages/test/TestPage";
import reduxStore, { persistor } from "app/reduxStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainRouter from "routes";

const App = () => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <MainRouter />
        {/* <TestPage /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;

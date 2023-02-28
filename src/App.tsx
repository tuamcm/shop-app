import React from "react";
import TestPage from "pages/test/TestPage";
import reduxStore, { persistor } from "app/reduxStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <TestPage />
      </PersistGate>
    </Provider>
  );
};

export default App;

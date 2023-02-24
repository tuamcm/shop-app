import React from "react";
import TestComponent from "components/TestComponent";

const TestPage = () => {
  return (
    <div>
      <p>TestPage</p>
      <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
      <p>{process.env.REACT_APP_OTHER_CODE}</p>
      <TestComponent />
    </div>
  );
};

export default TestPage;

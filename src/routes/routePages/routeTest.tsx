import { Route } from "react-router-dom";
import URL_ROUTES from "../setting";

const Test = () => {
  return <h1>Test Page</h1>;
};

const TestCreate = () => {
  return <h1>TestCreate Page</h1>;
};

const TestEdit = () => {
  return <h1>TestEdit Page</h1>;
};

const TestDetail = () => {
  return <h1>TestDetail Page</h1>;
};

const TestMessage = () => {
  return <h1>TestMessage Page</h1>;
};

const routeTest = (key: number) => {
  return (
    <Route key={key} path={URL_ROUTES.Test.Index}>
      <Route index element={<Test />} />
      <Route path={URL_ROUTES.Common.Create} element={<TestCreate />} />
      <Route path={URL_ROUTES.Common.Edit} element={<TestEdit />} />
      <Route path={URL_ROUTES.Common.Detail} element={<TestDetail />} />
      <Route path={URL_ROUTES.Test.Message} element={<TestMessage />} />
    </Route>
  );
};

export default routeTest;

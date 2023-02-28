import { Route } from "react-router-dom";
import URL_ROUTES from "../setting";

const Example = () => {
  return <h1>Example Page</h1>;
};

const ExampleCreate = () => {
  return <h1>ExampleCreate Page</h1>;
};

const ExampleEdit = () => {
  return <h1>ExampleEdit Page</h1>;
};

const ExampleDetail = () => {
  return <h1>ExampleDetail Page</h1>;
};

const ExampleTask = () => {
  return <h1>ExampleTask Page</h1>;
};

const routeExample = (key: number) => {
  return (
    <Route key={key} path={URL_ROUTES.Example.Index}>
      <Route index element={<Example />} />
      <Route path={URL_ROUTES.Common.Create} element={<ExampleCreate />} />
      <Route path={URL_ROUTES.Common.Edit} element={<ExampleEdit />} />
      <Route path={URL_ROUTES.Common.Detail} element={<ExampleDetail />} />
      <Route path={URL_ROUTES.Example.Task} element={<ExampleTask />} />
    </Route>
  );
};

export default routeExample;

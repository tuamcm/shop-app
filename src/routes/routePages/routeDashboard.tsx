import { Route } from "react-router-dom";
import URL_ROUTES from "../setting";

export const Dashboard = () => {
  return <h1>Dashboard Page</h1>;
};

const DashboardNotification = () => {
  return <h1>DashboardNotification Page</h1>;
};

const routeDashboard = (key: number) => {
  return (
    <Route key={key} path={URL_ROUTES.Dashboard.Index}>
      <Route index element={<Dashboard />} />
      <Route
        path={URL_ROUTES.Dashboard.Notification}
        element={<DashboardNotification />}
      />
    </Route>
  );
};

export default routeDashboard;

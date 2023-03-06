import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "pages/home/HomePage";
import LoginPage from "pages/login/LoginPage";
import ErrorPage from "pages/error/ErrorPage";
import URL_ROUTES from "./setting";
import ROUTE_PAGES from "./routePages";
import { Dashboard } from "./routePages/routeDashboard";
import AuthLayout from "./auth/AuthLayout";
import { getUserData, getUserDataNew } from "./auth/authServices";
import NoRequireAuth from "./auth/NoRequireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={URL_ROUTES.Root}>
        <Route index element={<HomePage />} />
        <Route
          loader={getUserDataNew}
          element={<NoRequireAuth redirect={URL_ROUTES.Root} />}
        >
          <Route path={URL_ROUTES.Login} element={<LoginPage />} />
        </Route>
      </Route>
      <Route
        path={URL_ROUTES.Admin}
        element={<AuthLayout redirect={URL_ROUTES.Login} />}
        loader={getUserData}
      >
        <Route index element={<Dashboard />} />
        {/* add all route */}
        {ROUTE_PAGES.map((item: any, index) => item(index))}
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;

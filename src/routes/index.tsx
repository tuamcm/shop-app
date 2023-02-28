import { BrowserRouter, Route, Routes } from "react-router-dom";
import URL_ROUTES from "./setting";
import ROUTE_PAGES from "./routePages";
import { Dashboard } from "./routePages/routeDashboard";

const ErrorPage = () => {
  return <h1 style={{ color: "red", textAlign: "center" }}>404 not found!</h1>;
};

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL_ROUTES.Root}>
          <Route index element={<div>HOME ROOT</div>} />
          <Route path={URL_ROUTES.Login} element={<div>LOGIN PAGE</div>} />
        </Route>
        <Route path={URL_ROUTES.Admin}>
          <Route index element={<Dashboard />} />
          {ROUTE_PAGES.map((item: any, index) => item(index))}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;

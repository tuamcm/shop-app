import { useLoaderData, Navigate, useLocation, Outlet } from "react-router-dom";
import URL_ROUTES from "routes/setting";
import { validateLoggedUser } from "./authServices";

interface IProps {
  children?: JSX.Element;
  redirect?: string;
}

const NoRequireAuth = ({ children, redirect = URL_ROUTES.Root }: IProps) => {
  const location = useLocation();
  const userData = useLoaderData() as any; // <-- type data
  if (validateLoggedUser(userData)) {
    // redirect to new page
    return <Navigate to={redirect} state={{ from: location }} replace />;
  }

  // continue load page
  return children || <Outlet />;
};

NoRequireAuth.defaultProps = {
  redirect: URL_ROUTES.Root,
  children: null,
};

export default NoRequireAuth;

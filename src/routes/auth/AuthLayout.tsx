import { useLoaderData, Outlet, Navigate, useLocation } from "react-router-dom";
import { validateLoggedUser } from "./authServices";

interface IProps {
  redirect: string;
}

const AuthLayout = ({ redirect }: IProps) => {
  const location = useLocation();
  const userData = useLoaderData() as any; // <-- type data
  if (validateLoggedUser(userData)) {
    // continue load page
    return <Outlet />;
  }

  // redirect to new page
  return <Navigate to={redirect} state={{ from: location }} replace />;
};

export default AuthLayout;

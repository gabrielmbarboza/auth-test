import React from 'react';
import { Navigate } from "react-router-dom";
import { getUserCookies} from "../../context/AuthProvider/utils";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const user = getUserCookies();

  if(!user || !user.email || !user.token){
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

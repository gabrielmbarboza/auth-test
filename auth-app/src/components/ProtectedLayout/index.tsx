import React from 'react';
import { Navigate } from "react-router-dom";
import { getUserFromCookie } from "../../context/AuthProvider/utils";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const user = getUserFromCookie();

  if(!user || !user.email || !user.token){
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

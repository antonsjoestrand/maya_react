import React from "react";
import { Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

export default function Admin() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return loginWithRedirect();
  } else {
    return <Navigate replace to='/' />;
  }
}

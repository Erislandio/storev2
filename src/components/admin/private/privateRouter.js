import React from "react";
import { Redirect, Route } from "react-router-dom";
import cookie from "js-cookie";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = cookie.get("token");

  return (
    <Route
      {...rest}
      render={props =>
        user ? <Component user={user} {...props} /> : <Redirect to="/login" exact/>
      }
    />
  );
};

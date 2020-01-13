import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Admin } from "./admin/admin";
import { LoginAdmin } from "./admin/login/loginAdmin";
import { PrivateRoute } from "./admin/private/privateRouter";
import PublicRoute from "./admin/private/publicRouter";

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Admin} path="/admin" />
        <PublicRoute
          to
          component={LoginAdmin}
          restricted={false}
          path="/login"
        />
      </Switch>
    </Router>
  );
}

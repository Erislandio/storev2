import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Admin } from "./admin/admin";
import { LoginAdmin } from "./admin/login/loginAdmin";
import { Container } from "./container/container";

export default function App() {
  return (
    <Router>
      <Switch>
        <Container>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/admin/login" exact>
            <LoginAdmin />
          </Route>
          <Route path="/signin" />
          <Route path="/dashboard" />
        </Container>
      </Switch>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Admin } from "./admin/admin";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/signin" />
        <Route path="/dashboard" />
      </Switch>
    </Router>
  );
}

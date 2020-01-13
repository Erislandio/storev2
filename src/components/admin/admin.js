import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export const Admin = () => {
  const token = null;

  return (
    <Router>
      <Switch>{!token && <Redirect to="/admin/login" />}</Switch>
    </Router>
  );
};

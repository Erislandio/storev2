import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Header } from "./header/header";

export const Admin = () => {
  return (
    <div id="adimin">
      <Header />
    </div>
  );
};

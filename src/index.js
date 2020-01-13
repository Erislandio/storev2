import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./services/client";
import App from "./components/App";
import "./styles.css";
import { ToastProvider } from "react-toast-notifications";

const Index = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ApolloProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

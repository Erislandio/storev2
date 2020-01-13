import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./services/client";
import App from "./components/App";
import './styles.css'

function Index() {
  return (
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

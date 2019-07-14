import React from "react";
import client from "./apollo";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact={true} path={"/"} component={Home} />
      </Router>
    </ApolloProvider>
  );
}
export default App;

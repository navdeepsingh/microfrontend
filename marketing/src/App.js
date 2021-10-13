import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = ({ history }) => (
  <StylesProvider>
    <Router history={history}>
      <Switch>
        <Route path="/pricing" component={Pricing} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;

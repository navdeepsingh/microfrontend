import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => (
  <StylesProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/pricing" component={Pricing} />
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  </StylesProvider>
);

export default App;

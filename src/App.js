import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/screens/Home";
import NotFound from "./components/screens/NotFound";
import Events from "./components/screens/Events";
import Contact from "./components/screens/Contact";
import Join from "./components/screens/Join";

function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={Events} path="/events" />
        <Route component={Contact} path="/contact" />
        <Route component={Join} path="/join"/>
        <Route component={NotFound} path="*" />
          </Switch>
      </BrowserRouter>
  );
}

export default App;

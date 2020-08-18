import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Popup from "./components/Popup";

function App() {
  return (
    <div className="ui container App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

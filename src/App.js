import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Routes from "./constants/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={Routes.list} />
          <Route path={Routes.form} />
          <Route exact from="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

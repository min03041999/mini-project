import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../component/HomePage/HomePage";
import ProductPage from "../component/ProductPage/ProductPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/home" component={HomePage} />
      <Route path="/product" component={ProductPage} />
    </Switch>
  );
};

export default Routes;

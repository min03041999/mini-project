import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AdminUser from "../component/AdminUser/AdminUser";
import AdminCategory from "../component/AdminCategory/AdminCategory";

const Routes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} component={AdminUser} exact />
      <Route path={`${path}/user`} component={AdminUser} />
      <Route path={`${path}/category`} component={AdminCategory} />
    </Switch>
  );
};

export default Routes;

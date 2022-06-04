import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AdminUser from "../component/AdminUser/AdminUser";
import AdminCategory from "../component/AdminCategory/AdminCategory";
import AdminCateSpecific from "../component/AdminCateSpecific/AdminCateSpecific";

const Routes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} component={AdminUser} exact />
      <Route path={`${path}/user`} component={AdminUser} />
      <Route path={`${path}/category/list-cate`} component={AdminCategory} />
      <Route
        path={`${path}/category/specific-cate`}
        component={AdminCateSpecific}
      />
    </Switch>
  );
};

export default Routes;

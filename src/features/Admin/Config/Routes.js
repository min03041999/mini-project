import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AdminUser from "../component/AdminUser/AdminUser";
import AdminCategory from "../component/AdminCategory/AdminCategory";
import AdminCateSpecific from "../component/AdminCateSpecific/AdminCateSpecific";
import AdminProduct from "../component/AdminProduct/AdminProduct";

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
      <Route path={`${path}/product`} component={AdminProduct} />
    </Switch>
  );
};

export default Routes;

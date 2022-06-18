import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AdminPage from "./features/Admin/AdminPage";
import UserPage from "./features/User/UserPage";
import NotFound from "./features/NotFound/NotFound";

function App() {
  return (
    <Switch>
      <Route path="/admin" component={AdminPage} />
      <Route path="/" component={UserPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;

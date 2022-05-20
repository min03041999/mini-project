import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AdminPage from "./features/Admin/AdminPage";

function App() {
  return (
    <Switch>
      <Route path="/admin" component={AdminPage}></Route>
    </Switch>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";


import Main from "./pages/Main";

function MainRoutes() {
  return (
    <Switch>
      <Route path="/">
       
          <Main />
        
      </Route>
    </Switch>
  );
}

export default MainRoutes;

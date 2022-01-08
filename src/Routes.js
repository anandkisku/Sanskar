import React from "react";
import { Switch, Route } from "react-router-dom";
import { Form1, Form2, Output, Welcome } from "./pages";

function Routes() {
  return (
    <Switch>
      {/* SubMenu */}
      <Route path="/welcome" exact>
        <Welcome />
      </Route>

      <Route path="/user-input" exact>
        <Form1 />
      </Route>

      <Route path="/user-input/subject-wise" exact>
        <Form2 />
      </Route>

      <Route path="/user-input/subject-wise/final-output" exact>
        <Output />
      </Route>
     
    </Switch>
  );
}

export default Routes;

import React from "react";
import "./App.css";
import "styles/util.scss";
// import { CancelButton } from "components/atoms/button/CancelButton";
// import { DecisiveButton } from "components/atoms/button/DecisiveButton";
// import { FloatButton } from "components/atoms/button/FloatButton";
import { Login } from "pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from "pages/Main";
import { Decide } from "pages/Decide";
import { Manage } from "pages/Manage";
import { Page404 } from "pages/Page404";
import { ChangePass } from "pages/ChangePass";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/decide">
          <Decide />
        </Route>
        <Route path="/manage">
          <Manage />
        </Route>
        <Route path="/changePass">
          <ChangePass />
        </Route>
      </Switch>
      <Route path="*">
        <Page404 />
      </Route>
    </BrowserRouter>
  );
}

export default App;

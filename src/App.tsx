import React from "react";
import "./App.css";
import "styles/util.scss";
import { CancelButton } from "components/atoms/button/CancelButton";
import { DecisiveButton } from "components/atoms/button/DecisiveButton";
import { FloatButton } from "components/atoms/button/FloatButton";
import { Login } from "pages/Login";

function App() {
  return (
    <div className="App">
      <FloatButton />
      <br />
      <br />
      <br />
      <br />
      <DecisiveButton />
      <br />
      <CancelButton />
      <Login />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { CancelButton } from "./atoms/button/CancelButton";
import { DecisiveButton } from "./atoms/button/DecisiveButton";
import { FloatButton } from "./atoms/button/FloatButton";
import { LoginButton } from "./atoms/button/LoginButton";

function App() {
  return (
    <div className="App">
      <FloatButton />
      <br />
      <br />
      <br />
      <LoginButton />
      <br />
      <DecisiveButton />
      <br />
      <CancelButton />
    </div>
  );
}

export default App;

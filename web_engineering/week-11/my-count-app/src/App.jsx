import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CountComp from "./components/CountComp";

function App() {
  return (
    <div>
      <h1>My Counter App</h1>
      <CountComp />
    </div>
  );
}
export default App;

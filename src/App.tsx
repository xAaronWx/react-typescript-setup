import React from "react";
import "./App.css";
import Clock from "./components/Clock";

let testProp: string = "Am I getting passed the Clock component?";
let optionalProp: string = "You sure are!";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="verticalCenter"></div>
      <Clock testProp={testProp} optionalProp={optionalProp} />
    </div>
  );
};

export default App;

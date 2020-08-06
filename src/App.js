import React from "react";
import "./App.css";
import ButtonBadge from "./ButtonBadge/ButtonBadge";
function App() {
  const customFunction = () => {
    console.log("I am called");
  };
  return (
    <div className="App">
      <ButtonBadge
        kind="primary"
        counter={101}
        children="Press Me"
        click={customFunction}
      />
    </div>
  );
}

export default App;

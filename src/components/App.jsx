import React from "react";
import TextArea from "./TextArea";
import DisplayText from "./DisplayText";

function App() {

  return (
    <div className="container">
      <h1>Voice to Text Converter</h1>
      <div className="text-container">
      <TextArea start = "yes" />
      <DisplayText />
      </div>
    </div>
  );
}

export default App;

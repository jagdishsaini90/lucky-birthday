import React from "react";
import Birthday from "./BirthDay";
import privacy from "./privacy.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Birthday />
      <div className="footer">
        <img src={privacy} alt="" width="30" />
        <p style={{ marginLeft: "10px" }}>
          Your information is not being stored
        </p>
      </div>
    </div>
  );
}

export default App;

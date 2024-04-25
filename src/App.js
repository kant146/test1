import React from "react";
import "./style/App.css";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";

function App() {
  

  return (
    <div className="containerBox " style={{margin:"auto",justifyContent:"center",display:"flex", flexDirection:"column"}}>
      <div style={{width:"99.5vw",display:"flex", flexDirection:"row", }} >
      <One  />
      <Two />
      </div>
      <div>
        <Three />
      </div>
    </div>
  );
}

export default App;
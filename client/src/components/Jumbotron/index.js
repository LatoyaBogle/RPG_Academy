import React from "react";
//import "./style.css"
import POE from '../../images/POE.png';

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 600, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
    
      {children}
    </div>
  );
}

export default Jumbotron;

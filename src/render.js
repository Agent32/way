import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";



// ========================================
function renderAllTree (state, stateEditFunctions)
{
ReactDOM.render(
  <React.StrictMode>
   <App state={state} addPostWall={stateEditFunctions.addPostWall} postMassage={stateEditFunctions.postMassage} />
  </React.StrictMode>,
  document.getElementById("root")
);
}


export default renderAllTree

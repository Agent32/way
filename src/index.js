import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './index.css'
import reportWebVitals from './reportWebVitals'
import store from './redux/state'


// ========================================

//renderAllTree(state, stateEditFunctions)

function renderAllTree (store)
{
  
ReactDOM.render(
  <React.StrictMode>
   <App state={store.getState() }  store={store}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
}
store.getRenderCallback (renderAllTree)


renderAllTree(store);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

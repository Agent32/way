import './index.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import App from './App';
import store from './redux/rStore';
import reportWebVitals from './reportWebVitals';

// ========================================

// renderAllTree(state, stateEditFunctions)


  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
     <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
      </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './redux/rStore';
import reportWebVitals from './reportWebVitals';

// ========================================

// renderAllTree(state, stateEditFunctions)

function renderAllTree (store) {
  
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

store.subscribe( () =>  {renderAllTree(store)})

renderAllTree(store)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

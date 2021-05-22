import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/rStore'
import reportWebVitals from './reportWebVitals'

// ========================================

// renderAllTree(state, stateEditFunctions)

/*
 <React.StrictMode>
 </React.StrictMode>
*/

ReactDOM.render(

    <HashRouter>
      <Provider store={store}>
          <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
        </Provider>
    </HashRouter>
    ,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

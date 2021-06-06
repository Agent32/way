import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {  HashRouter } from 'react-router-dom' //BrowserRouter,
import { Provider } from 'react-redux'
import App from './App'
import store from './store/rStore'
import reportWebVitals from './reportWebVitals'

// ========================================


ReactDOM.render(

    <HashRouter>
      <Provider store={store}>
          <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
        </Provider>
    </HashRouter>
    ,
    document.getElementById('root')
)

reportWebVitals()

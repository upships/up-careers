import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import App from './App'

import 'bulma/css/bulma.css'

/* Middlewares */

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore)

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) } >
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker()

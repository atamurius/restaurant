import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { reducer, routes, middleware } from './modules'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...[ ...middleware, thunk ])
))

const Application = ({store}) =>
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      {routes}
    </Router>
  </Provider>

ReactDOM.render(<Application store={store} />, document.getElementById('container'))

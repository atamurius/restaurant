import { combineReducers } from 'redux'
import { Route } from 'react-router'
import { routerReducer } from 'react-router-redux'
import React from 'react'

export const reducer = combineReducers({
  routing: routerReducer,
  categories: require('./categories/reducer').default,
})

export const routes = (
  <Route path="/">
    {require('./categories/routes').default}
  </Route>
)

const actorMiddleware = actor => store => next => action => {
  const first = next(action);
  const second = actor(action, store.dispatch, store.getState());
  return Promise.all([
    Promise.resolve(first),
    Promise.resolve(second),
  ])
}

export const middleware = [
  actorMiddleware(require('./categories/actor').default),
]

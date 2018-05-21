import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducers from '../reducers'
import epicLoader from '../epics'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import promiseErrorLogger from './middlewares/promiseErrorLogger'
import * as asyncInitialState from 'redux-async-initial-state'
import storeLoader from './middlewares/storeLoader'
import trackVisitMiddleware from './middlewares/trackVisitMiddleware'
import {
  createBrowserHistory,
  routerMiddleware,
  startListener
} from 'redux-first-routing'

export function createReduxStore (initialState) {
  const storeLoaderMiddleware = asyncInitialState.middleware(storeLoader)
  const history = createBrowserHistory()
  const epicMiddleware = createEpicMiddleware(epicLoader)

  let middlewares = [
    routerMiddleware(history),
    trackVisitMiddleware,
    storeLoaderMiddleware,
    thunk,
    promiseErrorLogger,
    promiseMiddleware(),
    epicMiddleware
  ]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  const storeEnhancer = applyMiddleware(...middlewares)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose
  const createStoreWithMiddleware = composeEnhancers(storeEnhancer)(createStore)
  const store = createStoreWithMiddleware(reducers, initialState)
  startListener(history, store)

  // Hot Reload
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // redux-reducers loader
      const nextReducer = require('../reducers')  // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
      // redux-observer loader
      const epicLoader = require('../epics')
      epicMiddleware.replaceEpic(epicLoader)
    })
  }

  return store
}

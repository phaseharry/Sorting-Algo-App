import { combineReducers, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import arrayReducer from './reducers/array'
import isSortingReducer from './reducers/isSorting'
import currentSortReducer from './reducers/currentSort'

const reducers = combineReducers({
  array: arrayReducer,
  isSorting: isSortingReducer,
  currentSort: currentSortReducer
})

const store = createStore(reducers, applyMiddleware(logger))

export default store
import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import dummy from './modules/dummy'

export default combineReducers({
  counter,
  dummy,
  router
})

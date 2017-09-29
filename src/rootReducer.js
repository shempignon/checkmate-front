import { combineReducers } from 'redux'
import {
  key as bracketsKey,
  reducer as bracketsReducer
} from './brackets/index'
import {
  key as characterKey,
  reducer as characterReducer
} from './character/index'

export default combineReducers({
  [characterKey]: characterReducer,
  [bracketsKey]: bracketsReducer,
})


import { combineReducers } from 'redux'
import { key as characterKey,
        reducer as characterReducer } from './character/index'

export default combineReducers({
        [characterKey]: characterReducer,
})


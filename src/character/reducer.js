import { handleActions } from 'redux-actions'
import {
  key,
  characterUpdate,
  characterFetchCancel,
  characterFetchFulfilled,
  characterFetchRejected,
} from './actions'

export const selectors = {
  name: state => state[key].name,
  realm: state => state[key].realm,
}

const initialState = {
  name: '',
  realm: '',
}

export default handleActions({
  [characterUpdate]: (state, action) => {
    const { name, value } = action.payload

    return {
      ...state,
      [name]: value
    }
  },
  [characterFetchCancel]: (state, action) => state,
  [characterFetchFulfilled]: (state, action) => state,
  [characterFetchRejected]: (state, action) => {
    console.error(action.payload)

    return state
  }
}, initialState)


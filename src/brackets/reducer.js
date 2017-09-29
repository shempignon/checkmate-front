import { handleActions } from 'redux-actions'
import {
  key,
  bracketUpdate
} from './actions'

export const selectors = {
  brackets: state => state[key].brackets,
}

const initialState = {
  brackets: {},
}


export default handleActions({
  [bracketUpdate]: (state, action) => {
    
    const { name, slug, rating, experience } = action.payload
    const brackets = {
      ...state.brackets,
      [name]: {
        slug,
        rating,
        experience,
      }
    }

    return {
      ...state,
      brackets
    }
  }
}, initialState)


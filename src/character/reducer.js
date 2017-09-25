import { handleActions } from 'redux-actions'
import { key } from './actions'

export const selectors = {
        name: state => state[key].name,
        realm: state => state[key].realm,
}

const initialState = {
        name: '',
        realm: '',
}

export default handleActions({}, initialState)


import { createAction } from 'redux-actions'

export const key = 'brackets'

export const bracketUpdate = createAction(`${key}/BRACKET_UPDATE`)
export const bracketsUpdate = createAction(`${key}/BRACKETS_UPDATE`)

export default {
  bracketUpdate,
  bracketsUpdate,
}

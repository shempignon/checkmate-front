import { createLogic } from 'redux-logic'
import {
  bracketUpdate,
  bracketsUpdate
} from './actions'

export const bracketUpdateLogic = createLogic({
  type: bracketsUpdate,
  latest: true,

  process({ getState, httpClient, action }, dispatch, done) {
    const slugs = ['2v2', '3v3', 'rbg']

    const brackets = new Map(Object.entries(action.payload))

    brackets.forEach((bracket, name) => {
      if (slugs.includes(bracket.slug)) {
        const { slug, rating } = bracket

        dispatch(bracketUpdate({
          name,
          slug,
          rating,
        }))
      }
    })
  }
 
})

export default [
  bracketUpdateLogic,
]


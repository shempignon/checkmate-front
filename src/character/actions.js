import { createAction } from 'redux-actions'

export const key = 'character'

export const characterFetch = createAction(`${key}/FETCH`)
export const characterFetchCancel = createAction(`${key}/FETCH_CANCEL`)
export const characterFetchFulfilled = createAction(`${key}/FETCH_FULFILLED`)
export const characterFetchRejected = createAction(`${key}/FETCH_REJECTED`)
export const characterUpdate = createAction(`${key}/CHARACTER_UPDATE`, event => {
  const { id, value } = event.target

  return {
    name: id,
    value,
  }
})

export default {
  characterFetch,
  characterFetchCancel,
  characterFetchFulfilled,
  characterFetchRejected,
  characterUpdate,
}


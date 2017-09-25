import { createActions } from 'redux-actions'

export const key = 'character'

export const characterFetch = createActions(`${key}/FETCH`)
export const characterFetchCancel = createActions(`${key}/FETCH_CANCEL`)
export const characterFetchFulfilled = createActions(`${key}/FETCH_FULFILLED`)
export const characterFetchRejected = createActions(`${key}/FETCH_REJECTED`)

export default {
        characterFetch,
        characterFetchCancel,
        characterFetchFulfilled,
        characterFetchRejected
}

import { createLogic } from 'redux-logic'
import { Observable } from 'rxjs'
import { selectors as characterSel } from './reducer'
import {
  characterFetch,
  characterFetchCancel,
  characterFetchRejected
} from './actions'
import { bracketsUpdate } from './../brackets/actions'

export const characterFetchLogic = createLogic({
  type: characterFetch,
  cancelType: characterFetchCancel,
  latest: true,

  validate({ getState, action }, allow, reject) {
    const name = characterSel.name(getState())
    const realm = characterSel.realm(getState())

    if (name !== '' && realm !== '') {
      allow(action)
    } else {
      reject()
    }
  },

  process({ getState, httpClient }, dispatch, done) {
    const name = characterSel.name(getState())
    const realm = characterSel.realm(getState())
    dispatch(
      httpClient.getJSON(`https://eu.api.battle.net/wow/character/${realm}/${name}?fields=pvp&locale=en_GB&apikey=4znw68vneccxwh6rh7nk2853b998c76c`)
        .map(payload => payload.pvp.brackets)
        .map(character => (bracketsUpdate(character)))
        .catch(err => Observable.of(characterFetchRejected(err)))
    )
    done()
  }
})

export default [
  characterFetchLogic,
]


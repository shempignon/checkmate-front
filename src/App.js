import React from 'react'
import { connect } from 'react-redux'  
import {
  component as Character,
  actions as characterActions,
  selectors as characterSel
} from './character/index'
import {
  component as Brackets,
  selectors as bracketsSel
} from './brackets/index'

const { characterUpdate, characterFetch } = characterActions

function App({ name, realm, brackets, characterUpdate, characterFetch }) {
    return (
      <main>
        <Character
          name={name}
          realm={realm}
          characterUpdate={characterUpdate}
        characterFetch={characterFetch}
        />
        <Brackets brackets={brackets} />
      </main>
    )
}

const enhance = connect(
  state => ({
    name: characterSel.name(state),
    realm: characterSel.realm(state),
    brackets: Object.values(bracketsSel.brackets(state)),
  }),
  {
    characterUpdate,
    characterFetch,
  }
)
export default enhance(App)

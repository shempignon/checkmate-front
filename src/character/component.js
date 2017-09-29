import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'

const realms = [
  { value: 'garona', label: 'Garona' },
  { value: 'sylvanas', label: 'Sylvanas' },
]

function Search({ name, realm, characterFetch, characterUpdate }) {
  return (
    <form onSubmit={e => {
      e.preventDefault()

      return characterFetch()
    }}>
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={characterUpdate}
      />
      <TextField
        id="realm"
        label="Realm"
        value={realm}
        onChange={characterUpdate}
      >
        {realms.map(realm => (
          <MenuItem key={realm.value} option={realm.value}>
            {realm.label}
          </MenuItem>
        ))}
      </TextField>
      <Button raised color="primary" type="submit">
        Search
      </Button>
    </form>
  )
}

export default Search

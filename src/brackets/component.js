import React from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

export default function Brackets({ brackets }) {
  return (
    <article>
      {brackets.map(bracket => (
        <Paper elevation={2} key={bracket.slug}>
          <Typography type="headline" component="h3">{bracket.slug}</Typography>
          <Typography type="body1" component="p">{bracket.rating}</Typography>
        </Paper>
      ))}
    </article>
  )
}


import React from 'react'
import { Button, Paper, TextField } from '@mui/material'

export default function Form() {
  return (
    <Paper>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="text">Text</Button>
    </Paper>
  )
}

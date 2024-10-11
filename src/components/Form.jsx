import React from 'react'
import { Button, TextField } from '@mui/material'

export default function Form() {
  return (
    <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="text">Text</Button>
    </div>
  )
}

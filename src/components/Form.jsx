import React, { useState } from 'react'
import { Button, Paper, TextField } from '@mui/material'

export default function Form() {
  const [text, setText] = useState(null);



  return (
    <Paper style={{ padding: "1em" }}>
        <div style={{ display:"flex", justifyContent:"center" }}>
            <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={(e) => setText(e.target.value)} fullWidth/>
            <Button variant="text" onClick={ () => console.log(text)}>ADD</Button>
        </div>
    </Paper>
  )
}

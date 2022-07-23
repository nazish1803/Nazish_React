import { Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

function Button_MUI() {
  return (
    <div>
        <Stack spacing={2} direction="row" sx={{padding:'20px 0 10px 0'}}>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
        </Stack>
    </div>
  )
}

export default Button_MUI
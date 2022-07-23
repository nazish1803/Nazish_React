import { Box, Container, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Grid_Mui() {
  return (
    <div>
        <Container maxWidth="lg" sx={{padding:'20px 0 0 0'}}>
            <Box sx={{ bgcolor:'#cfe8fc', height:"100px" }} />
            <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                alignItems="stretch" justifyContent="center" mt={2}>
                <Item>Item 1 Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            <Stack sx={{ width:'100%' }} spacing={2} pt={2}>
          <Item>Item 1</Item>
          <Item>Item 1</Item>
          <Item>Item 1</Item>
            </Stack>
        </Container>
    </div>
  )
}

export default Grid_Mui
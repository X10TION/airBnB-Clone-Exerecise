import React from 'react'
// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const choices = [
    { id: 1, text: 'Anywhere' },
    { id: 2, text: 'Any week' },
    { id: 3, text: 'Add guest', 
    withIcon: true },
  ];

const LocationSearch= () => {
  return (
    <Paper
      sx={{
        borderRadius: 27,
        ml: 15,
      }}
      elevation={2}
    >
      <Stack
        sx={{
          borderRadius: 25,
          pl: 2,
        }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {choices.map((choice) => {
          return (
            <Button key={choice.id}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: 'bold',
                }}
              >
                {choice.text}
              </Typography>
              {choice.withIcon && (
                <Box
                  sx={{
                    ml: 1,
                    mt: 1,
                    mr: 1,
                  }}
                >
                  <IoSearchCircleSharp color={pink[500]} size={30} />
                </Box>
              )}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  )
}

export default LocationSearch
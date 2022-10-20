import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';

const MobileView = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 600,
        border: 0,
        borderRadius: 20,
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
      <IconButton sx={{ p: '10px' }}>
        <FaSearch />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1, width:'100%'}} placeholder="Where to? 
      any week" />
     
      <IconButton type="submit" sx={{ p: '10px' }}>
        <VscSettings />
      </IconButton>
      
    </Paper>
  );
};

export default MobileView;
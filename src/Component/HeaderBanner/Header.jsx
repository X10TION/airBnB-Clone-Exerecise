import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// here is or custome components
import LocationSearch from './LocationSearch';
import MobileView from './MobileView';
import Logo from '../HeaderBanner/Logo';
import Profile from './Profile'
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from '../../Themes/commonStyle';


const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Box sx={displayOnDesktop}>
            <Logo />
          
          </Box>
          <Box sx={displayOnDesktop}>
          <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <Profile />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MobileView />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
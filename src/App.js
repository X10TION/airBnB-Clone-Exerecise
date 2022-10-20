import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import Header from './Component/HeaderBanner/Header';
import ContentData from '../src/Component/MenuOptions/Options'
import LocationCards from './Component/BodyCard/LocationCard';
import Container  from '@mui/material/Container';
import FooterMenu from './Component/Footer/FooterMenu'
import MobileFooter from './Component/Footer/MobileFooter'
import Footer from './Component/Footer/Footer'
import  { displayOnDesktop } from './Themes/commonStyle'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
          <ContentData />
          </Box>
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
     
    </React.Fragment>
  );
}

export default App;

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import Header from './Component/HeaderBanner/Header';
import ContentData from '../src/Component/MenuOptions/Options'
import LocationCards from './Component/BodyCard/LocationCard';
import Container  from '@mui/material/Container';
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        height:'100vh'
      }}>
        <Box>
          <Header />
          <ContentData />

          <Container>
            <LocationCards />
          </Container>
        </Box>

      </Box>
    </React.Fragment>
  );
}

export default App;

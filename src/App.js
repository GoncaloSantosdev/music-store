import React from 'react';
import './App.css'; 
// React Router
import { Routes, Route } from 'react-router-dom';
// Routes
import Home from './routes/Home';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
// Theme 
import CustomThemeProvider from './CustomThemeProvider';
// MUI
import { Box } from '@mui/material';

function App() {

  return (
    <CustomThemeProvider>
    <Box display='flex' flexDirection='column' height='100vh'>
      <Box>
        <Header />
      </Box>
      
      <Box flexGrow={1} display='flex' flexDirection='column' alignItems='center' mt={6}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
    </CustomThemeProvider>
  );
}

export default App;

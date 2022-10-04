import React, { useState } from 'react';
// Context
import UserContextProvider from './Context/userContext';
import ShoppingCartProvider from './Context/shoppingCartContext';
// React Router
import { Routes, Route } from 'react-router-dom';
// Routes
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import CartPage from './routes/CartPage';
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
    <UserContextProvider>
    <ShoppingCartProvider>
      <Box display='flex' flexDirection='column' height='100vh'>
        <Box>
          <Header />
        </Box>
        
        <Box flexGrow={1}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </Box>

        <Box>
          <Footer />
        </Box>
      </Box>
    </ShoppingCartProvider>
    </UserContextProvider>
    </CustomThemeProvider>
  );
}

export default App;

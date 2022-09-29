import React, { useState } from 'react';
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
  // User Auth
  const [user, setUser] = useState();

  const signIn = (userData) => {
    setUser(userData);
  }

  const signOut = () => {
    setUser(undefined);
  }

  // Shopping Cart
  const initalState = [];
  const [shoppingCart, setShoppingCart] = useState(initalState);

  console.log(shoppingCart)

  const addToCart = (productData) => {
    const productFound = shoppingCart.find((cartItem) => cartItem.id === productData.id);

    if(productFound){
      const newShoppingCart = shoppingCart.map((cartItem) => {
        if(cartItem.id === productFound.id){
          const newItemQuantity = cartItem.quantity + 1;
          return {
            ...cartItem,
            quantity: newItemQuantity,
            total: newItemQuantity * cartItem.price,
          }
        }

        return cartItem;
      });
      setShoppingCart(newShoppingCart);
    } else { 
      const newCartItem = {...productData, quantity: 1, total: productData.price};
      setShoppingCart([...shoppingCart, newCartItem]);
    }
  };

  const removeFromCart = (productId) => {
    const newShoppingCart = shoppingCart.filter((cartItem) => cartItem.id !== productId);
    setShoppingCart(newShoppingCart);
  }
  
  const emptyCart = () => setShoppingCart(initalState);

  return (
    <CustomThemeProvider>
    <Box display='flex' flexDirection='column' height='100vh'>
      <Box>
        <Header user={user}/>
      </Box>
      
      <Box flexGrow={1}>
        <Routes>
          <Route path='/' element={<Home user={user} addToCart={addToCart}/>}/>
          <Route path='/sign-in' element={<SignIn user={user} setUser={setUser} signIn={signIn} signOut={signOut} />} />
          <Route path='/cart' element={<CartPage shoppingCart={shoppingCart} removeFromCart={removeFromCart} emptyCart={emptyCart}/>} />
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

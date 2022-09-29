import React from 'react';
// Components
import CartItem from '../components/CartItem';
// MUI
import { Box, Button } from '@mui/material';
import { Home, Replay } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CartPage = ({ shoppingCart, removeFromCart, emptyCart }) => {
  return (
    <Box width={1} display='flex' flexDirection='column' alignItems='center' mt={6}>
        {shoppingCart.map((cartItem) => (
            <Box key={cartItem.id} mb={4}>
                <CartItem cartItem={cartItem} removeFromCart={removeFromCart}/>
            </Box>
        ))}
        <Box>
          <Box mb={3}>
            <Button
                fullWidth
                variant='contained'
            >
                Checkout
            </Button>
          </Box>

          <Box mb={3}>
            <Button
                fullWidth
                variant='contained'
                startIcon={<Replay />}
            >
                Empty Cart
            </Button>
          </Box>

          <Box mb={3}>
            <Link to='/'>
            <Button
                fullWidth
                variant='contained'
                startIcon={<Home />}
            >
                Home
            </Button>
            </Link>
          </Box>
        </Box>
    </Box>
  )
}

export default CartPage
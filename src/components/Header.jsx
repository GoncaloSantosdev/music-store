import React, { useContext } from 'react';
// Redux
import { useSelector } from 'react-redux'
// MUI
import { AppBar, Box, Toolbar, Typography, IconButton, Badge, } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../Context/shoppingCartContext';

const Header = () => {
  const user = useSelector((state) => state.user);

  const { shoppingCart } = useShoppingCart();

  const cartCount = shoppingCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
       <Box display='flex' justifyContent='space-between' alignItems='center' width={1}>
        <Link to='/'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyMusicStore.com
          </Typography>
        </Link>
          <Box>
            <Link to='/sign-in'>
              {
                user ? (
                   <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                    >
                    <img src={user.profilePicture} alt="" style={{ width: '30px', height: '30px', borderRadius: '20px' }}/>
                  </IconButton>
                ) : (
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                  <AccountCircle />
                  </IconButton>
                )
              }
            </Link>

            <Link to='/cart'>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={cartCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Toolbar>        
    </AppBar>
  </Box>
  )
}

export default Header
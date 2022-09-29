import React from 'react';
// MUI
import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

const CartItem = ({ cartItem, removeFromCart }) => {
  return (
    <Card>
      <Box display='flex' width={1}>
        <Box>
            <CardMedia component='img' sx={{ width: 80, height: 80, p: 1 }} image={cartItem.image} />
        </Box>

        <Box px={2} display='flex' flexDirection='column' flexGrow={1} justifyContent='center'>
            <Box>
                <Typography fontWeight='bold'>
                    {cartItem.title}
                </Typography>
            </Box>

            <Box>
                <Typography fontWeight='bold'>
                   $ {cartItem.price / 100}
                </Typography>
            </Box>
        </Box>

        <Box px={2} display='flex' flexDirection='column' justifyContent='center'>
            <Typography fontWeight='bold'>
                x {cartItem.quantity}
            </Typography>
        </Box>

        <Box px={2} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <IconButton onClick={() => removeFromCart(cartItem.id)}>
                <DeleteForever />
            </IconButton>
        </Box>
      </Box>
    </Card>
  )
}

export default CartItem
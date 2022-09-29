import React, { useState } from 'react';
// MUI
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={product.title} subheader={product.brand}/>

      <CardMedia
        component="img"
        height="300"
        style={{
            objectFit: 'cover'
        }}
        image={product.image}
        alt={product.title}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {product.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Box width={1} display='flex' justifyContent='space-between'>
            <Button>Add to Cart</Button>

            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
        </Box>
      </CardActions>

    </Card>
  )
}

export default Product
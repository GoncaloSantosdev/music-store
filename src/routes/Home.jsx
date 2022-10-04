import React from 'react';
// Data
import { productsData } from '../assets/data/productsData';
// Components
import Product from '../components/Product';
// MUI
import { Box } from '@mui/system';

const Home = ({ addToCart }) => {
  return (
    <>
      {productsData.map((product) => (
        <Box key={product.id} mt={6} mb={6} flexGrow={1} display='flex' flexDirection='column' alignItems='center'>
          <Product product={product}/>
        </Box>
      ))}
    </>
  )
}

export default Home
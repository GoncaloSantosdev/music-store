import React from 'react';
// Data
import { productsData } from '../assets/data/productsData';
// Components
import Product from '../components/Product';
// MUI
import { Box } from '@mui/system';

const Home = () => {
  return (
    <>
      {productsData.map((product) => (
        <Box key={product.id} mb={6}>
          <Product product={product}/>
        </Box>
      ))}
    </>
  )
}

export default Home
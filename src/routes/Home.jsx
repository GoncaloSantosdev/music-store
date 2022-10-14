import React, { useEffect, useState } from 'react';
// Data
import { productsData } from '../assets/data/productsData';
// Components
import Product from '../components/Product';
// MUI
import { Box } from '@mui/system';

// Mocked fetch Data function
export const fetchProductData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(productsData);
  }, []);
});


const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductData().then((response) => setProducts(response));
  }, []);

  return (
    <>
      {products.map((product) => (
        <Box key={product.id} mt={6} mb={6} flexGrow={1} display='flex' flexDirection='column' alignItems='center'>
          <Product product={product}/>
        </Box>
      ))}
    </>
  )
}

export default Home
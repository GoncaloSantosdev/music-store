import { createContext, useContext, useState } from "react";

export const shoppingCartContext = createContext();
export const useShoppingCart = () => useContext(shoppingCartContext);

const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart
  const initalState = [];
  const [shoppingCart, setShoppingCart] = useState(initalState);

  console.log(shoppingCart);

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
    return(
        <shoppingCartContext.Provider value={{ shoppingCart, addToCart, removeFromCart, emptyCart }}>
            {children}
        </shoppingCartContext.Provider>
      )
}

export default ShoppingCartProvider;
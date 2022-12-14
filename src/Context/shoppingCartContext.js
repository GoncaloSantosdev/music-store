import { createContext, useContext, useState } from 'react';

export const shoppingCartContext = createContext();

export const useShoppingCart = () => useContext(shoppingCartContext);

function ShoppingCartContextProvider(props) {
  const { children } = props;

  // Shopping cart
  const shoppingCartInitialState = [];

  const [shoppingCart, setShoppingCart] = useState(shoppingCartInitialState);

  const addToCart = (productData) => {
    const productFound = shoppingCart.find((cartItem) => cartItem.id === productData.id);

    if (productFound) {
      const newShoppingCart = shoppingCart.map((cartItem) => {
        if (cartItem.id === productFound.id) {
          const newItemQuantity = cartItem.quantity + 1;
          return {
            ...cartItem,
            quantity: newItemQuantity,
            total: newItemQuantity * cartItem.price,
          };
        }

        return cartItem;
      });

      setShoppingCart(newShoppingCart);
    } else {
      const newCartItem = { ...productData, quantity: 1, total: productData.price };
      setShoppingCart([...shoppingCart, newCartItem]);
    }
  };

  const removeFromCart = (productId) => {
    setShoppingCart(shoppingCart.filter((cartItem) => cartItem.id !== productId));
  };

  const emptyCart = () => setShoppingCart(shoppingCartInitialState);

  return (
    <shoppingCartContext.Provider value={{
      shoppingCart, addToCart, removeFromCart, emptyCart,
    }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}

export default ShoppingCartContextProvider;
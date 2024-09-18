import React, { createContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to the cart
  function addItemToCart(item) {
    const arr = [...cartItems];
    const itemIndex = arr.findIndex((data) => data.id === item.id);
    if (itemIndex === -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setCartItems(arr);
  }

  // Function to remove item from the cart
  function removeItemFromCart(id) {
    const arr = [...cartItems];
    const itemIndex = arr.findIndex((data) => data.id === id);
    if (itemIndex !== -1) {
      if (arr[itemIndex].quantity > 1) {
        arr[itemIndex].quantity--;
      } else {
        arr.splice(itemIndex, 1); // Remove the item if the quantity is 1
      }
    }
    setCartItems(arr);
  }

  // Check if an item is added to the cart
  function isItemAdded(id) {
    const itemIndex = cartItems.findIndex((data) => data.id === id);
    return itemIndex !== -1;
  }

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, isItemAdded }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
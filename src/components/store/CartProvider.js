import React from 'react';
import CartContext from './Cart-context';

export default function CartProvider(props) {
  
    const addItemToCartHandler = (item) => {
        // Add item to cart logic
    };

    const removeItemFromCartHandler = (id) => {
        // Remove item from cart logic using the provided id
    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

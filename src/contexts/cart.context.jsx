import { createContext, useState } from "react";

const addCartItem = (cartItems, product) => {
    // Find if cartItems contains product to add
    const existingCartItem = cartItems.find(item => item.id === product.id);

    // If found, increase quantity
    if (existingCartItem) {
        return cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
    }
    // return new array with modified cartItems/ new cartItems
    return [...cartItems, { ...product, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
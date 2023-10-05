import { createContext, useState } from "react";

const CartContext = createContext({
    cart: [],
    setCart: () => {},
});

//provider comoonent
export function CartProvider(props) {
    const [cart, setCart] = useState([]);

    return <CartContext.Provider value={{ cart, setCart }}>{props.children}</CartContext.Provider>
};

export default CartContext;
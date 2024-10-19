import { createContext, useEffect, useState } from "react";
export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    useEffect(()=>{
        console.log(cart)
    },[cart])
    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (id) =>{
        setCart( cart.filter( item => item.id !== id ) )
    }

    const data = {
        cart,
        addToCart,
        removeFromCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}


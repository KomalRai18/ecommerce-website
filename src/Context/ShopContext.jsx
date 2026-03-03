import { createContext, useState } from "react";
import all_product from "../assets/all_products";

export const ShopContext = createContext();

export default function ShopProvider(props) {
    const products = all_product;
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const addItemToCart = (product)=>{
        setCartItems((prev)=>{
            if(prev.find((e)=> e.id == product.id )) {
                return prev.map((item)=> (
                    item.id == product.id ? {...item, quantity: item.quantity+1} : item
                ))
            } else {
                return [...prev, {...product, quantity: 1}]
            } 
        })
    }

    const removeItemFromCart = (productId)=>{
        setCartItems((prev)=> {
            if(prev.find((e)=> e.id == productId)) {
                return prev.filter((item)=> item.id!==productId);
            }
        })
    }

    const decreaseQuantity = (productId)=>{
        setCartItems((prev)=> {
            const item = prev.find((e)=> e.id == productId);
            if(item && item.quantity > 1) {
                return prev.map((item)=> item.id == productId ? {...item, quantity: item.quantity - 1} : {...item}).filter((item)=> item.quantity > 0)
            } 
        
        })
    }

    const totalCartCount = ()=>{
        const countItems = new Set(cartItems.map((item)=>item.id)).size;
        setCartCount(countItems);
    }

    return(
        <ShopContext.Provider value={{products, addItemToCart, removeItemFromCart, cartItems, decreaseQuantity, totalCartCount, cartCount}}>
            {props.children}
        </ShopContext.Provider>
    )
}
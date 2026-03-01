import { createContext, useState } from "react";
import all_product from "../assets/all_products";
export const ShopContext = createContext();

export default function ShopProvider(props) {
    const products = all_product;
    return(
        <ShopContext.Provider value={{products}}>
            {props.children}
        </ShopContext.Provider>
    )
}
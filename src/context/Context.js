import {createContext, useContext, useReducer} from "react";
import {faker} from "@faker-js/faker";
import {cartReducer, productReducer} from "./Reducers";

const Cart=createContext();
faker.seed(99)
const Context=({children})=>{
    const products=[...Array(20)].map(()=>(
        {
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.avatar(),
            inStock: faker.random.numeric(1, {bannedDigits:['2',"3", "5",'6','7','8','9'],  allowLeadingZeros: true })}
    ));
    console.log(products)
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart:[]
    });
    const [productState, productDispatch]=useReducer(productReducer, {
        byStock: false,
        searchQuery:""
    })
    return <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
        {children}
    </Cart.Provider>



};
export default Context;
 export const CartState=()=>{
     return useContext(Cart)
 }

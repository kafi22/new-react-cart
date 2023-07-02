import { createContext, useContext, useReducer, useState } from "react";
import reducer, { initialState } from "../../reducer";

const Context = createContext()

import 
{ 
    CLEAR_CART,
    INCREASE,
    DECREASE,
    REMOVE,
    LOADING,
    DISPLAY

 } from "./actions";
import { useTotalAmount } from "./useTotalAmount";



const GlobalContext = ({children}) => {
    
    
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
   const {totalAmount, totalPrice} = useTotalAmount(state.cart)
   
   const clearAll = () => {
    dispatch({type : CLEAR_CART})
   }

   const removeItem = (id) => {

    dispatch({type : REMOVE, payload : {id}})

   }

   const increaseBtn = (id) => {
        dispatch({type : INCREASE, payload : {id}})
   }

   const decreaseBtn = (id) => {
    dispatch({type : DECREASE, payload : {id}})
   }



 

    return  <Context.Provider value={{state, clearAll, removeItem, increaseBtn, decreaseBtn, totalAmount, totalPrice}}>
                {children}
            </Context.Provider>
}


 
export const useCustomHooks = () => {

    return useContext(Context)
}


export default GlobalContext;
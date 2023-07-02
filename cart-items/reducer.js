import cartItems from "./src/Component/Data";
import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./src/Component/actions";

export const initialState = {
    loading : false,
    user : 'kafi ahmed',
    cart : new Map(cartItems.map(item => [item.id, item]))
}

const reducer = (state, action) => {

    
   if(action.type === CLEAR_CART) {
    return {...state, cart : new Map()}
   };

   if(action.type === REMOVE) {

    const filterItem =  new Map(state.cart)
    filterItem.delete(action.payload.id)
    return {
        ...state, 
        cart : filterItem
    }

    }

    if (action.type === INCREASE) {
        const newCart = new Map(state.cart);
        const itemId = action.payload.id;
        const item = newCart.get(itemId);
        const newItem = { ...item, amount: item.amount + 1 };
        newCart.set(itemId, newItem);
        return { ...state, cart: newCart };
    }

    if(action.type === DECREASE) {
        
        const newCart = new Map(state.cart);
        const itemId = action.payload.id;
        const item = newCart.get(itemId);
        const newItems = {...item, amount : item.amount - 1}
        newCart.set(itemId, newItems);
        if(item.amount === 1) {
            newCart.delete(itemId)
            return {...state, cart : newCart}
        }
        return {...state, cart : newCart}
    }

   

   
}

export default reducer;
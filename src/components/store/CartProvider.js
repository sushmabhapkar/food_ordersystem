import {useReducer} from 'react';
import CartContext from './Cart-context';
import { type } from '@testing-library/user-event/dist/type';


const defaultCartState={
    items:[],
    totalAmount:0
};

const cartReducer=(state,action)=>{
    if(action.type==='ADD')
    {
      const updatedItems=state.items.concat(action.item);
      const updateTotalAmount=state.totalAmount+ action.item.price *action.item.amount;
      return{
        items: updatedItems,
        totalAmount: updateTotalAmount
      };
    }
  return defaultCartState;
};

export default function CartProvider(props) {
  
   const [cartState,dispatchCartAction]= useReducer(cartReducer,defaultCartState);
    
   
    
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:'ADD',item: item});
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE',id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

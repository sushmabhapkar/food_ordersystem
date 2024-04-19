import {useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../store/Cart-context';
import CartItem from './CartItem';

export default function Cart(props) {

    const cartCtx=useContext(CartContext);
    const totalAmount=`${cartCtx.totalAmount.toFixed(2)}`;
    
    const hasItems=cartCtx.items.length>0;

    const cartItemRemoveHandler=id=>{};
const cartItemAddHandler=item=>{};


    const cartitems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item)=>(

              <CartItem 
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
              />
              ))}
        </ul>
    );


    return (
        <Modal onClose={props.onClose}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span> {/* Assuming you'll calculate the total amount */}
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

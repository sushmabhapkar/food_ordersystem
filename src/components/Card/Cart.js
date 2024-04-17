import React from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
export default function Cart(props) {
    const cartitems=<ul className={classes['cart-items']}>{[
        {is:'c1',name:'Sushi',amount:2,price:12.99}
     ].map((item) =><li>{item.name}</li>)}</ul>;
  return (
    <Modal>
      {cartitems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>35.62</span>
      </div>
       <div className={classes.actions}>
         <button className={classes['button--alt']}>Close</button>
         <button className={classes.button}>Order</button>
       </div>
      
    </Modal>
  )
}

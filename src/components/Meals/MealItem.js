import {useContext} from 'react'
import classes from './MealItem.module.css';
import MealForm from './MealForm';
import CartContext from '../store/Cart-context';

export default function MealItem(props) {
    const cartctx=useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`;

    const addItemToCartHandler=amount=>{
       cartctx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
       });
    };
  return (
  <li className={classes.meal}>
   <div>
      <h3>{props.name}</h3>
     <div className={classes.description}>{props.description}</div>
     <div className={classes.price}>{price}</div>
   </div>
     <div>
        <MealForm onAddToCart={addItemToCartHandler}/>
     </div>
</li>
  )
}

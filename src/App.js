import {useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Card/Cart';
import CartProvider from './components/store/CartProvider';

function App() {

  const [cartIsShown,setCartShown]=useState(false);

     function showCartHandler()
     {
       setCartShown(true);

     }

     function hideCartHandler()
     {
      setCartShown(false);
     }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
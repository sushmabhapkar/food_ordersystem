import { Fragment,useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Card/Cart';

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
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
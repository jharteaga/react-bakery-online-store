import React, { useState } from 'react';
import Menu from './components/Menu';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Bakery from './components/Bakery';
import Drinks from './components/Drinks';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ShoppingCart from './components/ShoppingCart';
import Logout from './components/Logout';
import Signup from './components/Signup';
import CartContext from './components/context/cartContext';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [numItems, setNumItems] = useState(0);

  const handleAddItem = (item) => {
    setCartItems(cartItems.length > 0 ? [...cartItems, item] : [item]);
    setNumItems(numItems + 1);
  };

  const handleShowCart = () => {
    console.log(cartItems);
  };

  return (
    <React.Fragment>
      <CartContext.Provider
        value={{
          numItems: numItems,
          onAddItem: handleAddItem,
          onShowCart: handleShowCart,
        }}
      >
        <Menu />
        <main className="container">
          <Switch>
            <Route path="/logout" component={Logout} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/bakery" component={Bakery} />
            <Route path="/drinks" component={Drinks} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/home" component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </CartContext.Provider>
    </React.Fragment>
  );
}

export default App;

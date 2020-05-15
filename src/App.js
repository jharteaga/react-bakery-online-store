import React from 'react';
import Menu from './components/Menu';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Bakery from './components/Bakery';
import Drinks from './components/Drinks';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ShoppingCart from './components/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

// firebase.firestore().collection('drinks').add({
//   type: 'drink',
//   name: 'Kentucky Coffee',
//   description:
//     "it's Wild Turkey 101, a whiskey that will not go unnoticed in your coffee!",
//   price: '6.25',
//   stock: 10,
//   image: 'kentucky',
// });

// firebase
//   .firestore()
//   .collection('users')
//   .onSnapshot((snapshot) => {
//     const user = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     console.log(user);
//   });

function App() {
  return (
    <React.Fragment>
      <Menu />
      <main className="container">
        <Switch>
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
    </React.Fragment>
  );
}

export default App;

import React, { useState, useEffect, useContext } from 'react';
import firebase from '../firebase';
import jwt from 'jwt-simple';
import CartContext from './context/cartContext';
import { ToastContainer, toast } from 'react-toastify';

function Drinks(props) {
  const [drinks, setDrinks] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  const cartContext = useContext(CartContext);

  const getDrinks = () => {
    firebase
      .firestore()
      .collection('drinks')
      .onSnapshot((snapshot) => {
        const result = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDrinks(result);
      });
  };

  const getCurrentUser = () => {
    const jwtUser = localStorage.getItem('currentUser');
    if (jwtUser) setCurrentUser(jwt.decode(jwtUser, 'secret'));
    else setCurrentUser(undefined);
  };

  useEffect(() => {
    getDrinks();
    getCurrentUser();
  }, []);

  return (
    <React.Fragment>
      <h1>Drinks</h1>
      <div className="drinks">
        {drinks.map((d) => (
          <div key={d.id} className="bakery__box">
            <img src={d.image} alt="Dessert" className="bakery__img" />
            <h4 className="bakery__name">{d.name}</h4>
            <p className="bakery__description">{d.description}</p>
            <div className="bakery__row">
              <span className="bakery__price">${d.price}</span>
              {currentUser && (
                <span
                  className="bakery__cart"
                  onClick={() => {
                    cartContext.onAddItem(d);
                    toast.success(`✅ ${d.name} added`, {
                      position: 'bottom-center',
                      autoClose: 2500,
                      hideProgressBar: true,
                      closeOnClick: false,
                      pauseOnHover: false,
                      draggable: false,
                      progress: undefined,
                    });
                  }}
                >
                  <i className="fas fa-cart-arrow-down"></i>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}

export default Drinks;

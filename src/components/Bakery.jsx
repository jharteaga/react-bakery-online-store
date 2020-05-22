import React, { useState, useEffect, useContext } from 'react';
import firebase from '../firebase';
import jwt from 'jwt-simple';
import CartContext from './context/cartContext';
import { ToastContainer, toast } from 'react-toastify';

function Bakery(props) {
  const [bakeries, setBakery] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  const cartContext = useContext(CartContext);

  const getBakery = () => {
    firebase
      .firestore()
      .collection('bakery')
      .onSnapshot((snapshot) => {
        const result = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBakery(result);
      });
  };

  const getCurrentUser = () => {
    const jwtUser = localStorage.getItem('currentUser');
    if (jwtUser) setCurrentUser(jwt.decode(jwtUser, 'secret'));
    else setCurrentUser(undefined);
  };

  useEffect(() => {
    getBakery();
    getCurrentUser();
  }, []);

  return (
    <React.Fragment>
      <h1>Bakery</h1>
      <div className="bakery">
        {bakeries.map((b) => (
          <div key={b.id} className="bakery__box">
            <img src={b.image} alt="Dessert" className="bakery__img" />
            <h4 className="bakery__name">{b.name}</h4>
            <p className="bakery__description">{b.description}</p>
            <div className="bakery__row">
              <span className="bakery__price">${b.price}</span>
              {currentUser && (
                <span
                  className="bakery__cart"
                  onClick={() => {
                    cartContext.onAddItem(b);
                    toast.success(`✅ ${b.name} added`, {
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

export default Bakery;

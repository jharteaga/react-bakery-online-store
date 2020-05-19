import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

function Drinks(props) {
  const [drinks, setDrinks] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

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
    const user = localStorage.getItem('currentUser');
    setCurrentUser(user);
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
                <span className="bakery__cart">
                  <i className="fas fa-cart-arrow-down"></i>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Drinks;

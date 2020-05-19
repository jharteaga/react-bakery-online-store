import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

function Bakery(props) {
  const [bakeries, setBakery] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

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
    const user = localStorage.getItem('currentUser');
    setCurrentUser(user);
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

export default Bakery;

import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

function Bakery(props) {
  const [bakeries, setBakery] = useState([]);

  useEffect(() => {
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
              <span className="bakery__cart">
                <FontAwesomeIcon icon={faCartArrowDown} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Bakery;

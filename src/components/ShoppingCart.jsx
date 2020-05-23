import React, { useState, useContext, useEffect } from 'react';
import CartContext from './context/cartContext';
import _ from 'lodash';

function ShoppingCart(props) {
  const cartContext = useContext(CartContext);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const list = _.values(_.groupBy(cartContext.cartItems, (item) => item.id));
    setListItems(list);
  }, [cartContext.cartItems]);

  return (
    <div className="shopping-container">
      {/* <div className="preview-checkout">
        <h2>Preview Checkout</h2>
      </div> */}
      <div className="table-responsive-sm mb-5">
        <h1 className="mb-4">Shopping Cart</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listItems.map((item) => (
              <tr key={item[0].id} className="">
                <td>
                  <img src={item[0].image} alt="product" className="img-cart" />
                </td>
                <td>{item[0].name}</td>
                <td>US$ {item[0].price}</td>
                <td>
                  <select id="quantity" defaultValue={item.length}>
                    {[...Array(5).keys()].map((value) =>
                      value + 1 !== item.length ? (
                        <option key={value + 1}>{value + 1}</option>
                      ) : (
                        <option key={value + 1}>{value + 1}</option>
                      )
                    )}
                  </select>
                </td>

                <td>
                  <button className="btn btn-danger btn-sm">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShoppingCart;

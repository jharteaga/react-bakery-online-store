import React, { useContext } from 'react';
import CartContext from './context/cartContext';

function ShoppingCart(props) {
  const cartContext = useContext(CartContext);

  return (
    <div className="shopping-container">
      {/* <div className="preview-checkout">
        <h2>Preview Checkout</h2>
      </div> */}
      <div className="table-responsive-sm">
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
            {cartContext.cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt="product" className="img-cart" />
                </td>
                <td>{item.name}</td>
                <td>US${item.price}</td>
                <td>1</td>
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

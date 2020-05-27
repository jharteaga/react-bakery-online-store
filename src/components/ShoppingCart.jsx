import React, { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import CartContext from './context/cartContext';
import _ from 'lodash';
import Modal from './common/Modal';

function ShoppingCart(props) {
  const cartContext = useContext(CartContext);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const list = _.values(_.groupBy(cartContext.cartItems, (item) => item.id));
    setListItems(list);
  }, [cartContext.cartItems]);

  return (
    <div className="shopping-container">
      {listItems
        .reduce((accum, currentVal) => {
          return accum + currentVal[0].price * currentVal.length;
        }, 0)
        .toFixed(2) !== '0.00' && (
        <div className="preview-checkout mt-2">
          <h1>
            <p>Total: </p> US$
            {listItems
              .reduce((accum, currentVal) => {
                return accum + currentVal[0].price * currentVal.length;
              }, 0)
              .toFixed(2)}
          </h1>
          <button
            className="btn btn-success btn-lg mt-2"
            data-toggle="modal"
            data-target="#purchaseModal"
            onClick={() => cartContext.onPurchase()}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
      <div className="table-responsive-sm mb-5 shopping-table">
        <h1 className="mb-4">Shopping Cart</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th className="image-col"></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listItems.map((item) => (
              <tr key={item[0].id} className="">
                <td className="image-col">
                  <img src={item[0].image} alt="product" className="img-cart" />
                </td>
                <td>{item[0].name}</td>
                <td>US$ {item[0].price}</td>
                <td>
                  <select
                    id="quantity"
                    defaultValue={item.length}
                    onChange={(e) =>
                      cartContext.onQuantityChange(item[0], e.target.value)
                    }
                  >
                    {[...Array(5).keys()].map((value) =>
                      value + 1 !== item.length ? (
                        <option key={value + 1} value={value + 1}>
                          {value + 1}
                        </option>
                      ) : (
                        <option key={value + 1} value={value + 1}>
                          {value + 1}
                        </option>
                      )
                    )}
                  </select>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      cartContext.onDeleteItem(item[0]);
                      toast.error(`✅ ${item[0].name} removed`, {
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
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal />
      <ToastContainer />
    </div>
  );
}

export default ShoppingCart;

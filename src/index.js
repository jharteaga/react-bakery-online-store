import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';

function test() {
  const items = [
    {
      id: 'adOAzTrqaUivHAeatyH0',
      type: 'bakery',
      description:
        'The seeds flavor the cheesecake, and the bean halves flavor the topping!',
      stock: 9,
      image: 'https://i.ibb.co/JCLV3WJ/cheesecake.jpg',
      price: '5.99',
      name: 'Vanilla Cheesecake',
    },
    {
      id: 'ywm1ZnluGP2D7QpBuFPb',
      stock: 15,
      image: 'https://i.ibb.co/jDSD4M1/italian.png',
      price: '3.99',
      name: 'Italian Coffee',
      type: 'drink',
      description:
        'Strega is a golden-colored, herbal liqueur that has a completely unique flavor!',
    },
    {
      id: 'e2Hon1kibbAXFBZ7JDYd',
      type: 'bakery',
      description:
        'Pecan pie is often purely sweet with no undertones, but the bourbon!',
      stock: 8,
      image: 'https://i.ibb.co/nrr0Y73/pecan.jpg',
      price: '6.00',
      name: 'Bourbon-Pecan Tart',
    },
    {
      id: 'xtbAlw3bbzOJT6qMH7VS',
      description:
        'Wonderful texture, assertive lemon flavor, just enough richness and just enough icing!',
      stock: 6,
      image: 'https://i.ibb.co/FW2frGK/lemon-cake.jpg',
      price: '8.75',
      name: "Nathan's Lemon Cake",
      type: 'bakery',
    },
    {
      id: 'adOAzTrqaUivHAeatyH0',
      stock: 9,
      image: 'https://i.ibb.co/JCLV3WJ/cheesecake.jpg',
      price: '5.99',
      name: 'Vanilla Cheesecake',
      type: 'bakery',
      description:
        'The seeds flavor the cheesecake, and the bean halves flavor the topping!',
    },
    {
      id: 'adOAzTrqaUivHAeatyH0',
      stock: 9,
      image: 'https://i.ibb.co/JCLV3WJ/cheesecake.jpg',
      price: '5.99',
      name: 'Vanilla Cheesecake',
      type: 'bakery',
      description:
        'The seeds flavor the cheesecake, and the bean halves flavor the topping!',
    },
    {
      id: 'ywm1ZnluGP2D7QpBuFPb',
      image: 'https://i.ibb.co/jDSD4M1/italian.png',
      price: '3.99',
      name: 'Italian Coffee',
      type: 'drink',
      description:
        'Strega is a golden-colored, herbal liqueur that has a completely unique flavor!',
      stock: 15,
    },
  ];

  const result = _.groupBy(items, (i) => i.id);
  // console.log(_.values(result));
}

test();

ReactDOM.render(
  <BrowserRouter
    basename={process.env.PUBLIC_URL || '/react-bakery-online-store'}
  >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

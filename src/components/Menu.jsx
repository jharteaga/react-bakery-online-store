import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import jwt from 'jwt-simple';
import Cart from './common/Cart';

function Menu(props) {
  const [currentUser, setCurrentUser] = useState(undefined);

  const getCurrentUser = () => {
    const jwtUser = localStorage.getItem('currentUser');
    if (jwtUser) setCurrentUser(jwt.decode(jwtUser, 'secret'));
    else setCurrentUser(undefined);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light bg-dark mb-5">
        <Link className="navbar-brand" to="/">
          Bakery Online Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto">
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link mr-5" to="/home">
                Home
              </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link mr-5" to="/bakery">
                Bakery
              </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link mr-5" to="/drinks">
                Drinks
              </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link mr-5" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
          {!currentUser && (
            <React.Fragment>
              <NavLink to="/login">
                <button
                  className="btn btn-primary my-2 my-sm-0 mr-2"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Login
                </button>
              </NavLink>
              <NavLink to="/sign-up">
                <button
                  className="btn btn-danger my-2 my-sm-0"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Sign Up
                </button>
              </NavLink>
            </React.Fragment>
          )}
          {currentUser && (
            <div>
              <span className="user-info">
                Welcome, {currentUser.firstName}!
              </span>
              <Cart />
              <NavLink to="/logout">
                <button className="btn btn-danger my-2 my-sm-0">Logout</button>
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Menu;

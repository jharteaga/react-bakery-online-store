import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Menu(props) {
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
            <li className="nav-item">
              <NavLink className="nav-link mr-5" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mr-5" to="/bakery">
                Bakery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mr-5" to="/drinks">
                Drinks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mr-5" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <NavLink to="/login">
            <button className="btn btn-primary my-2 my-sm-0">Login</button>
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Menu;

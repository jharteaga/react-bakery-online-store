import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cart from './common/Cart';

function Menu(props) {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-5"
      >
        <Navbar.Brand>
          <Link className="navbar-brand" to="/">
            Bakery Online Store
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-auto">
            <NavLink className="nav-link mr-5" to="/home">
              Home
            </NavLink>

            <NavLink className="nav-link mr-5" to="/bakery">
              Bakery
            </NavLink>

            <NavLink className="nav-link mr-5" to="/drinks">
              Drinks
            </NavLink>

            <NavLink className="nav-link mr-5" to="/contact-us">
              Contact Us
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className="nav-link mt-3" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/shopping-cart">
              <Cart />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Menu;

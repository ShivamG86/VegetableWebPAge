import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-light">
        <Link to="/" className="navbar-brand">
          <div className="text-success">GREEN</div>
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">
              SHOP
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">
            <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;

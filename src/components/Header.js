
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../logo.svg';
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Library Online Store" />
          </Link>
        </div>
        <div className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.css';
import heart from '../static/home/heart.svg';
import bag from '../static/home/bag.svg';
import profile from '../static/home/profile.svg';
import menu from '../static/home/menu.svg';

function Navigation() {
  return (
    <div className="navbar">
      <div className="all-category">
        <a>
          <img src={menu} alt="menu" width="24px" height="24px" />
          All Category
        </a>
      </div>
      <ul>
        <li className="home">
          <Link className="home-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <img src={heart} alt="heart" width="24px" height="24px" />
          </li>
          <li>
            <img src={bag} alt="bag" width="24px" height="24px" />
          </li>
          <li>
            <img src={profile} alt="profile" width="24px" height="24px" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;

import React from 'react';
import heart from 'public/images/home/heart.svg';
import bag from 'public/images/home/bag.svg';
import profile from 'public/images/home/profile.svg';
import menu from 'public/images/home/menu.svg';
import Link from 'next/link';
import Image from 'next/image';

function Navigation() {
  return (
    <div className="navbar">
      <div className="all-category">
        <a>
          <Image src={menu} alt="menu" />
          All Category
        </a>
      </div>
      <ul>
        <li className="home">
          <Link className="home-link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <Image src={heart} alt="heart" />
          </li>
          <li>
            <Image src={bag} alt="bag" />
          </li>
          <li>
            <Image src={profile} alt="profile" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;

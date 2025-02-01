import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import heart from 'public/images/home/heart.svg';
import bag from 'public/images/home/bag.svg';
import profile from 'public/images/home/profile.svg';
import menu from 'public/images/home/menu.svg';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  background-color: #001c3d;
  height: 54px;
`;

const AllCategory = styled.div`
  margin-right: 40px;
  color: #001c3d;
  background-color: #f4ce14;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 25px;
  font-weight: bold;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const NavItem = styled.li`
  display: inline-block;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

const HomeItem = styled(NavItem)`
  background-color: #f4ce14;
  padding: 10px 15px;
  border-radius: 35px;
`;

const HomeLink = styled(NavLink)`
  color: #001c3d;
`;

function Navigation() {
  return (
    <Nav>
      <AllCategory>
        <a>
          <Image src={menu} alt="menu" />
          All Category
        </a>
      </AllCategory>
      <NavList>
        <HomeItem>
          <HomeLink href="/">Home</HomeLink>
        </HomeItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/shop">Shop</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/blog">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
      <NavList>
        <NavItem>
          <Image src={heart} alt="heart" />
        </NavItem>
        <NavItem>
          <Image src={bag} alt="bag" />
        </NavItem>
        <NavItem>
          <Image src={profile} alt="profile" />
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;

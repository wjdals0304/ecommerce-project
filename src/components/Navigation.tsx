import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import heartIcon from 'public/images/home/heart.svg';
import bagIcon from 'public/images/home/bag.svg';
import profileIcon from 'public/images/home/profile.svg';
import menuIcon from 'public/images/home/menu.svg';
import {usePathname} from 'next/navigation';

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

  &.active {
    background-color: #f4ce14;
    padding: 10px 15px;
    border-radius: 35px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;

  &.active {
    color: #001c3d;
  }
`;

function Navigation() {
  const pathname = usePathname();

  return (
    <Nav>
      <AllCategory>
        <a>
          <Image src={menuIcon} alt="menu" />
          All Category
        </a>
      </AllCategory>
      <NavList>
        <NavItem className={pathname === '/' ? 'active' : ''}>
          <NavLink href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
        </NavItem>
        <NavItem className={pathname === '/about' ? 'active' : ''}>
          <NavLink
            href="/about"
            className={pathname === '/about' ? 'active' : ''}
          >
            About
          </NavLink>
        </NavItem>
        <NavItem className={pathname === '/shop' ? 'active' : ''}>
          <NavLink
            href="/shop"
            className={pathname === '/shop' ? 'active' : ''}
          >
            Shop
          </NavLink>
        </NavItem>
        <NavItem className={pathname === '/blog' ? 'active' : ''}>
          <NavLink
            href="/blog"
            className={pathname === '/blog' ? 'active' : ''}
          >
            Blog
          </NavLink>
        </NavItem>
        <NavItem className={pathname === '/contact' ? 'active' : ''}>
          <NavLink
            href="/contact"
            className={pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </NavLink>
        </NavItem>
      </NavList>
      <NavList>
        <NavItem>
          <Image src={heartIcon} alt="heart" />
        </NavItem>
        <NavItem>
          <Image src={bagIcon} alt="bag" />
        </NavItem>
        <NavItem>
          <Image src={profileIcon} alt="profile" />
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;

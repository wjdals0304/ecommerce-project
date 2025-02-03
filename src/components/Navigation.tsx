import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import heartIcon from 'public/images/home/heart.svg';
import bagIcon from 'public/images/home/bag.svg';
import profileIcon from 'public/images/home/profile.svg';
import menuIcon from 'public/images/home/menu.svg';
import {usePathname} from 'next/navigation';

const Container = styled.div`
  background-color: #001c3d;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #001c3d;
  max-width: 1240px;
  margin: 0 auto;
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

const NavItem = styled.div<{active: boolean}>`
  display: inline-block;
  ${({active}) =>
    active &&
    `
    background-color: #f4ce14;
    padding: 10px 15px;
    border-radius: 35px;
  `}
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
    <Container>
      <Nav>
        <AllCategory>
          <a>
            <Image src={menuIcon} alt="menu" />
            All Category
          </a>
        </AllCategory>
        <NavList>
          <NavItem active={pathname === '/'}>
            <NavLink href="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </NavLink>
          </NavItem>
          <NavItem active={pathname === '/about'}>
            <NavLink
              href="/about"
              className={pathname === '/about' ? 'active' : ''}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem active={pathname === '/shop'}>
            <NavLink
              href="/shop"
              className={pathname === '/shop' ? 'active' : ''}
            >
              Shop
            </NavLink>
          </NavItem>
          <NavItem active={pathname?.startsWith('/blog')}>
            <NavLink
              href="/blog"
              className={pathname?.startsWith('/blog') ? 'active' : ''}
            >
              Blog
            </NavLink>
          </NavItem>
          <NavItem active={pathname === '/contact'}>
            <NavLink
              href="/contact"
              className={pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavList>
        <NavList>
          <NavItem active={false}>
            <Image src={heartIcon} alt="heart" />
          </NavItem>
          <NavItem active={false}>
            <Image src={bagIcon} alt="bag" />
          </NavItem>
          <NavItem active={false}>
            <Image src={profileIcon} alt="profile" />
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  );
}

export default Navigation;

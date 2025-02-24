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

const NavLink = styled(Link)<{active: boolean}>`
  text-decoration: none;
  color: #ffffff;

  ${({active}) =>
    active &&
    `
    color: #001c3d;
  `}
`;

interface NavItem {
  title: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  {title: '홈', href: '/'},
  {title: '소개', href: '/about'},
  {title: '상품', href: '/shop'},
  {title: '블로그', href: '/blog'},
  {title: '문의', href: '/contact'},
];

function Navigation() {
  const pathname = usePathname();

  return (
    <Container>
      <Nav>
        <AllCategory>
          <a>
            <Image src={menuIcon} alt="menu" />
            전체 카테고리
          </a>
        </AllCategory>
        <NavList>
          {NAV_ITEMS.map((item, index) => (
            <NavItem active={pathname === item.href} key={index}>
              <NavLink href={item.href} active={pathname === item.href}>
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
        <NavList>
          <Link href="/cart">
            <NavItem active={false}>
              <Image src={bagIcon} alt="bag" />
            </NavItem>
          </Link>
          <NavItem active={false}>
            <Image src={profileIcon} alt="profile" />
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  );
}

export default Navigation;

import {useAuthStore} from '@/store/authStore';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {parseCookies} from 'nookies';
import bagIcon from 'public/images/home/bag.svg';
import profileIcon from 'public/images/home/profile.svg';
import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import CategoryMenuContainer from './CategoryMenu';
import {getAuthCookie} from '@/utils/cookieUtils';

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

interface CategoryItem {
  id: number;
  title: string;
  href: string;
}

const CATEGORIES: Record<number, string> = {
  1: '스마트폰',
  2: '디지털 카메라',
  3: '게임 악세사리',
  4: '노트북 및 랩탑',
  5: '컴퓨터/PC',
};

const getCategoryItems = (): CategoryItem[] => {
  return Object.entries(CATEGORIES).map(([id, title]) => ({
    id: Number(id),
    title,
    href: `/shop?categoryId=${id}`,
  }));
};

function Navigation() {
  const pathname = usePathname();
  const {isAuthenticated, user, setAuth} = useAuthStore();

  useEffect(() => {
    const isAuth = getAuthCookie();
    if (isAuth) {
      setAuth(true, user);
    }
  }, []);

  return (
    <Container>
      <Nav>
        <CategoryMenuContainer />
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
          {isAuthenticated ? (
            <Link href="/cart">
              <NavItem active={false}>
                <Image src={bagIcon} alt="bag" />
              </NavItem>
            </Link>
          ) : (
            <Link href="/signin">
              <span style={{color: '#ffffff'}}>로그인</span>
            </Link>
          )}
          {isAuthenticated ? (
            <Link href="/profile">
              <NavItem active={false}>
                <Image src={profileIcon} alt="profile" />
              </NavItem>
            </Link>
          ) : (
            <Link href="/signup">
              <span style={{color: '#ffffff'}}>회원가입</span>
            </Link>
          )}
        </NavList>
      </Nav>
    </Container>
  );
}

export default Navigation;

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import heartIcon from 'public/images/home/heart.svg';
import bagIcon from 'public/images/home/bag.svg';
import profileIcon from 'public/images/home/profile.svg';
import menuIcon from 'public/images/home/menu.svg';
import {usePathname} from 'next/navigation';
import {useAuthStore} from '@/store/authStore';
import {useState, useEffect, useRef} from 'react';

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

const CategoryContainer = styled.div`
  position: relative;
  height: 100%;
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
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const CategoryMenu = styled.div<{isOpen: boolean}>`
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 250px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-top: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const CategoryItem = styled.div`
  padding: 12px 20px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
    color: #001c3d;
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

const CATEGORY_ITEMS = [
  {title: '스마트폰', href: '/shop/category?categoryId=1'},
  {title: '디지털 카메라', href: '/shop/category?categoryId=2'},
  {title: '게임 악세사리', href: '/shop/category?categoryId=3'},
  {title: '노트북 및 랩탑', href: '/shop/category?categoryId=4'},
  {title: '컴퓨터/PC', href: '/shop/category?categoryId=5'},
];

function Navigation() {
  const pathname = usePathname();
  const {isAuthenticated, user} = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const mouseDown = 'mousedown';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener(mouseDown, handleClickOutside);
    return () => {
      document.removeEventListener(mouseDown, handleClickOutside);
    };
  }, []);

  const handleCategoryMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleCategoryMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <Nav>
        <CategoryContainer
          ref={categoryRef}
          onMouseEnter={handleCategoryMouseEnter}
          onMouseLeave={handleCategoryMouseLeave}
        >
          <AllCategory>
            <a>
              <Image src={menuIcon} alt="menu" />
              전체 카테고리
            </a>
          </AllCategory>
          <CategoryMenu isOpen={isMenuOpen}>
            {CATEGORY_ITEMS.map((item, index) => (
              <Link href={item.href} key={index}>
                <CategoryItem>{item.title}</CategoryItem>
              </Link>
            ))}
          </CategoryMenu>
        </CategoryContainer>

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

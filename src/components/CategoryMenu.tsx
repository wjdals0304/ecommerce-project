import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import menuIcon from 'public/images/home/menu.svg';
import { API_ENDPOINTS } from '@/config/apiEndPoints';
import { UrlObject } from 'url';
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

const CategoryMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
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

interface CategoryItem {
  id: number;
  title: string;
  href: UrlObject;
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
    href: {
      pathname: API_ENDPOINTS.SHOP,
      query: {
        categoryId: id,
      },
    },
  }));
};
const categoryItems = getCategoryItems();

export default function CategoryMenuContainer() {
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
        {categoryItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <CategoryItem>{item.title}</CategoryItem>
          </Link>
        ))}
      </CategoryMenu>
    </CategoryContainer>
  );
}

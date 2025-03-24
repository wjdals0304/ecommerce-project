import { API_ENDPOINTS } from '@/config/apiEndPoints';
import { Category } from '@/types/shop';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 100px 0;
  gap: 25px;
`;

const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 35px 45px;
  width: 185px;
  height: 169px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

function HomeCategory({ categories }: { categories: Category[] }) {
  return (
    <CategoryList>
      {categories.map(({ id, name }) => (
        <Link href={`${API_ENDPOINTS.SHOP}?categoryId=${id}`} key={id}>
          <CategoryItem>
            <Image src="" alt="카테고리 이미지" width={94} height={70} />
            <CategoryTitle>{name}</CategoryTitle>
          </CategoryItem>
        </Link>
      ))}
    </CategoryList>
  );
}

export default HomeCategory;

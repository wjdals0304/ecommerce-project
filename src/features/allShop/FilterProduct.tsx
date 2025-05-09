import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import { useShopData } from '@/shared/hooks/useShopData';
import { formDataEntries } from '@/shared/lib/apiClient';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Price from './Price';
import Warrenty from './Warrenty';
import { FilterParams } from '@/shared/types/shop';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 50px 25px 25px 0;
  background-color: #ffffff;
  width: 291px;
  height: auto;
  border-radius: 10px;
`;

const CategoryTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #001c30;
  padding: 15px;
  border-bottom: 1px solid #001c30;
`;

const CategoryOption = styled.li<{ isSelected: boolean }>`
  font-size: 16px;
  color: ${({ isSelected }) => (isSelected ? '#001c30' : '#8e96a4')};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  cursor: pointer;
  padding: 15px;
  width: 100%;
  user-select: none;

  &:hover {
    color: #001c30;
    font-weight: bold;
  }
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  background-color: #f4ce14;
  color: #001c30;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  width: 250px;
  height: 49px;
  margin: 0px 25px 25px 0;
  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #f4ce14;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const FilterContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 291px;
  height: 450px;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export enum FilterProductEnum {
  ALL = 0,
}

interface FilterProductProps {
  onFilterChange: (filterParams: FilterParams) => void;
}

export default function FilterProduct({ onFilterChange }: FilterProductProps) {
  const router = useRouter();
  const { categoryId } = router.query;
  const { data: { categories } = { categories: [] } } = useShopData();

  const handleFilterSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const data = formDataEntries(event);
    const filterParams: FilterParams = {
      categoryId: categoryId ? Number(categoryId) : undefined,
      priceMin: 0,
      priceMax: Number(data.priceMax),
      warranty: data.warranty ? Number(data.warranty) : undefined,
    };

    onFilterChange(filterParams);
  };

  return (
    <Container>
      <CategoryItem>
        <CategoryTitle>카테고리</CategoryTitle>
        <ul>
          {categories.map(({ id, name }) => (
            <CategoryOption key={id} isSelected={Number(categoryId) === id}>
              <Link
                href={{
                  pathname: API_ENDPOINTS.SHOP,
                  query: {
                    categoryId: id,
                  },
                }}
              >
                {name}
              </Link>
            </CategoryOption>
          ))}
        </ul>
      </CategoryItem>
      <FilterContainer onSubmit={handleFilterSubmit} method="get">
        <Price />
        <Warrenty />
        <FilterButton>필터 적용</FilterButton>
      </FilterContainer>
    </Container>
  );
}

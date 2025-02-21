import styled from 'styled-components';
import Price from './Price';
import Warrenty, {WarrentyOptions} from './Warrenty';
import {Category} from '@/types/shop';
import {useState} from 'react';
import {formDataEntries, getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/apiEndPoints';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;
`;

const FilterTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  margin: 50px 25px 25px 0;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryItem = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0px 25px 25px 0;
  background-color: #ffffff;
  width: 291px;
  height: auto;
`;

const CategoryTitle = styled.li`
  font-size: 18px;
  font-weight: bold;
  color: #001c30;
  padding: 15px;
  border-bottom: 1px solid #001c30;
`;

const CategoryOption = styled.li<{isSelected: boolean}>`
  font-size: 16px;
  color: ${({isSelected}) => (isSelected ? '#001c30' : '#8e96a4')};
  font-weight: ${({isSelected}) => (isSelected ? 'bold' : 'normal')};
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
  width: 291px;
  height: 49px;
  margin: 0px 25px 25px 0;
`;

interface FilterProductProps {
  categories: Category[];
  onFilterChange: (filterParams: any) => void;
  selectedCategory: number;
  setSelectedCategory: (categoryId: number) => void;
  selectedWarrenty: string;
  setSelectedWarrenty: (warrenty: string) => void;
  priceValue: number;
  setPriceValue: (price: number) => void;
}

export enum FilterProductEnum {
  ALL = 0,
}

export default function FilterProduct({
  categories,
  onFilterChange,
  selectedCategory,
  setSelectedCategory,
  selectedWarrenty,
  setSelectedWarrenty,
  priceValue,
  setPriceValue,
}: FilterProductProps) {
  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const handleFilterSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const data = formDataEntries(event);
    const filterParams = {
      categoryId: selectedCategory,
      priceMin: 0,
      priceMax: data.priceMax,
      warranty: selectedWarrenty,
    };

    onFilterChange(filterParams);
  };

  return (
    <Container onSubmit={handleFilterSubmit} method="get">
      <FilterTitle>상품 필터</FilterTitle>
      <CategoryItem>
        <CategoryTitle>카테고리</CategoryTitle>
        {categories.map(({id, name}) => (
          <CategoryOption
            key={id}
            onClick={() => handleCategoryClick(id)}
            isSelected={selectedCategory === id}
          >
            {name}
          </CategoryOption>
        ))}
      </CategoryItem>
      <Price priceValue={priceValue} setPriceValue={setPriceValue} />
      <Warrenty
        selectedWarrenty={selectedWarrenty}
        setSelectedWarrenty={setSelectedWarrenty}
      />
      <FilterButton>필터 적용</FilterButton>
    </Container>
  );
}

import styled from 'styled-components';
import Brand from './Brand';
import Price from './Price';
import Warrenty from './Warrenty';
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: #f5f7f8;
`;

const FilterTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  padding: 50px 25px 25px 100px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style: none;
  padding: 0px 25px 25px 100px;
  background-color: #ffffff;
  width: 291px;
  height: auto;
`;

const CategoryTitle = styled.li`
  font-size: 18px;
  font-weight: bold;
  color: #001c30;
  margin-bottom: 10px;
`;

const CategoryOption = styled.li`
  font-size: 16px;
  color: #8e96a4;
  cursor: pointer;
  padding: 5px 0;

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
  margin: 0px 25px 25px 100px;
`;

export default function FilterProduct() {
  return (
    <Container>
      <FilterTitle>Filter Product</FilterTitle>
      <CategoryItem>
        <CategoryTitle>Categories</CategoryTitle>
        <CategoryOption>All Product</CategoryOption>
        <CategoryOption>Smartphone</CategoryOption>
        <CategoryOption>Digital Camera</CategoryOption>
        <CategoryOption>Gaming Accessories</CategoryOption>
        <CategoryOption>Laptop & Notebook</CategoryOption>
        <CategoryOption>Computer/PC</CategoryOption>
        <CategoryOption>Audio & Video</CategoryOption>
        <CategoryOption>IOT</CategoryOption>
        <CategoryOption>Other</CategoryOption>
      </CategoryItem>
      <Brand />
      <Price />
      <Warrenty />
      <FilterButton>Filter</FilterButton>
    </Container>
  );
}

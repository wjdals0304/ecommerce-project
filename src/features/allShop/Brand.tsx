import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;
  margin: 25px 25px 25px 0;
`;

const FilterTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #001c30;
`;

const BrandList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BrandOption = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: medium;
  color: #001c30;
  cursor: pointer;
  padding: 5px 0;

  input {
    margin-right: 10px;
  }

  &:checked {
    color: #ff0000;
    font-weight: bold;
  }
`;

export default function Brand() {
  return (
    <Container>
      <FilterTitle>Brand</FilterTitle>
      <BrandList>
        <BrandOption>
          <input type="checkbox" checked />
          All Brand
        </BrandOption>
        <BrandOption>
          <input type="checkbox" />
          Mirante
        </BrandOption>
        <BrandOption>
          <input type="checkbox" />
          Axus
        </BrandOption>
        <BrandOption>
          <input type="checkbox" />
          Avalions
        </BrandOption>
        <BrandOption>
          <input type="checkbox" />
          Rober
        </BrandOption>
        <BrandOption>
          <input type="checkbox" />
          Gigna
        </BrandOption>
      </BrandList>
    </Container>
  );
}

import styled from 'styled-components';
import {useState} from 'react';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;
  padding: 0px 25px 25px 0;
`;

const FilterTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #001c30;
`;

const WarrentyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const WarrentyOption = styled.li<{isSelected: boolean}>`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: ${({isSelected}) => (isSelected ? 'bold' : 'medium')};
  color: #001c30;
  cursor: pointer;
  padding: 5px 0;

  input {
    margin-right: 10px;
  }
`;

export const WarrentyOptions = {
  ALL: {name: '전체', value: 'ALL'},
  ONE_YEAR: {name: '1년', value: 'ONE_YEAR'},
  TWO_YEAR: {name: '2년 +', value: 'TWO_YEAR'},
  LIFETIME: {name: '평생', value: 'LIFETIME'},
};

export default function Warrenty({
  selectedWarrenty,
  setSelectedWarrenty,
}: {
  selectedWarrenty: string;
  setSelectedWarrenty: (warrenty: string) => void;
}) {
  const handleWarrentyChange = (warrenty: string) => {
    setSelectedWarrenty(warrenty);
  };

  return (
    <Container>
      <FilterTitle>품질 보증</FilterTitle>
      <WarrentyList>
        {Object.values(WarrentyOptions).map(({name, value}) => (
          <WarrentyOption key={name} isSelected={selectedWarrenty === value}>
            <label>
              <input
                type="radio"
                name="warranty"
                id={`warranty-${value}`}
                value={value}
                checked={selectedWarrenty === value}
                onChange={() => handleWarrentyChange(value)}
              />
              <span>{name}</span>
            </label>
          </WarrentyOption>
        ))}
      </WarrentyList>
    </Container>
  );
}

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: #f5f7f8;
  padding: 0px 25px 25px 100px;
`;

const FilterTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  margin-bottom: 10px;
`;

const WarrentyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const WarrentyOption = styled.li`
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
      <FilterTitle>Warrenty</FilterTitle>
      <WarrentyList>
        <WarrentyOption>
          <input type="checkbox" checked />1 Years
        </WarrentyOption>
        <WarrentyOption>
          <input type="checkbox" />2 Years +
        </WarrentyOption>
        <WarrentyOption>
          <input type="checkbox" />
          LifeTime
        </WarrentyOption>
      </WarrentyList>
    </Container>
  );
}

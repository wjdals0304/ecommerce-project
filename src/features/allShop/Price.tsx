import {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;
  padding: 25px 25px 25px 0;
`;

const FilterTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  padding-bottom: 10px;
  border-bottom: 1px solid #001c30;
`;

const RangeContainer = styled.div`
  width: 100%;
  padding: 15px 0;
`;

const RangeInput = styled.input`
  width: 100%;
  height: 2px;
  background: #ee9322;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #ee9322;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const PriceDisplay = styled.div`
  margin-top: 10px;
  color: #8e96a4;
  font-size: 14px;
`;

export default function Price() {
  const [price, setPrice] = useState(250);

  return (
    <Container>
      <FilterTitle>Price</FilterTitle>
      <RangeContainer>
        <RangeInput
          type="range"
          min={0}
          max={500}
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
        />
        <PriceDisplay>
          Price : ${0} - ${price}
        </PriceDisplay>
      </RangeContainer>
    </Container>
  );
}

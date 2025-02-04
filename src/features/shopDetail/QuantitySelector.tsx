import {useState} from 'react';
import styled from 'styled-components';

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
`;

const QuantityText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
`;

const QuantityTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuantityMinusButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background-color: #8e96a4;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
`;

const QuantityPlusButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background-color: #001c3d;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
`;

const QuantityDisplay = styled.div`
  width: 84px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #8e96a4;
  border-radius: 25px;
  font-size: 20px;
  color: #001c30;
`;

const TotalPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  margin-left: 5px;
`;

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 100.0;
  const totalPrice = (quantity * pricePerItem).toFixed(2);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <QuantityContainer>
      <QuantityText>Quantity:</QuantityText>
      <QuantityTextContainer>
        <QuantityMinusButton onClick={decreaseQuantity}>-</QuantityMinusButton>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <QuantityPlusButton onClick={increaseQuantity}>+</QuantityPlusButton>
        <TotalPrice>Total: ${totalPrice}</TotalPrice>
      </QuantityTextContainer>
    </QuantityContainer>
  );
}

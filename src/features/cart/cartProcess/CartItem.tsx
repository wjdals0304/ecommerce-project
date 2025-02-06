import styled from 'styled-components';

const CartItemContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
  padding-bottom: 25px;
  border-bottom: 3px solid #8e96a4;
`;

const CartItemNumber = styled.span`
  font-size: 24px;
  font-weight: bold;
  border: 1px solid #001c30;
  border-radius: 50%;
  padding: 5px 12px;
`;

const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CartItemTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
`;

const CartDescription = styled.span`
  font-size: 14px;
  font-weight: medium;
  color: #001c30;
`;

interface CartItemProps {
  index: number;
  title: string;
  description: string;
}

export default function CartItem({index, title, description}: CartItemProps) {
  return (
    <CartItemContainer>
      <CartItemNumber>{index + 1}</CartItemNumber>
      <CartInfo>
        <CartItemTitle>{title}</CartItemTitle>
        <CartDescription>{description}</CartDescription>
      </CartInfo>
    </CartItemContainer>
  );
}

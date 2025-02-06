import {useState} from 'react';
import styled from 'styled-components';
import {CartProcessTabType} from './TabContent';
import TabContent from './TabContent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
`;

const CartItem = styled.div<{isActive: boolean}>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
  border-bottom: 3px solid ${({isActive}) => (isActive ? '#EE9322' : '#8E96A4')};
  padding-bottom: 25px;
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

export default function CartProcessTab() {
  const [activeTab, setActiveTab] = useState<CartProcessTabType>(
    CartProcessTabType.ShoppingCart,
  );

  const goToNextStep = () => {
    setActiveTab(prevTab => {
      switch (prevTab) {
        case CartProcessTabType.ShoppingCart:
          return CartProcessTabType.ShippingCheckout;
        case CartProcessTabType.ShippingCheckout:
          return CartProcessTabType.Confirmation;
        default:
          return prevTab;
      }
    });
  };

  return (
    <Container>
      <InnerContainer>
        <CartItem isActive={activeTab === CartProcessTabType.ShoppingCart}>
          <CartItemNumber>1</CartItemNumber>
          <CartInfo>
            <CartItemTitle>Shopping Cart</CartItemTitle>
            <CartDescription>Organize Your List of items</CartDescription>
          </CartInfo>
        </CartItem>
        <CartItem isActive={activeTab === CartProcessTabType.ShippingCheckout}>
          <CartItemNumber>2</CartItemNumber>
          <CartInfo>
            <CartItemTitle>Shipping & Checkout</CartItemTitle>
            <CartDescription>Organize Your List of items</CartDescription>
          </CartInfo>
        </CartItem>
        <CartItem isActive={activeTab === CartProcessTabType.Confirmation}>
          <CartItemNumber>3</CartItemNumber>
          <CartInfo>
            <CartItemTitle>Confirmation</CartItemTitle>
            <CartDescription>Examine and Send in Your Order.</CartDescription>
          </CartInfo>
        </CartItem>
      </InnerContainer>
      <TabContent activeTab={activeTab} onNextStep={goToNextStep} />
    </Container>
  );
}

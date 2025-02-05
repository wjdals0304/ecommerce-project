import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import ShoppingCheckOut from './ShoppingCheckOut';
const Container = styled.div`
  max-width: 1240px;
  margin: 50px auto;
`;

export enum CartProcessTabType {
  ShoppingCart = 'shoppingCart',
  ShippingCheckout = 'shippingCheckout',
  Confirmation = 'confirmation',
}

interface TabContentProps {
  activeTab: CartProcessTabType;
  onNextStep: () => void;
}

export default function TabContent({activeTab, onNextStep}: TabContentProps) {
  return (
    <Container>
      {activeTab === CartProcessTabType.ShoppingCart && (
        <ShoppingCart onNextStep={onNextStep} />
      )}
      {activeTab === CartProcessTabType.ShippingCheckout && (
        <ShoppingCheckOut />
      )}
    </Container>
  );
}

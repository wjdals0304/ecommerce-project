import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import ShoppingCheckOut from './ShoppingCheckOut';
import ShoppingConfirm from './ShoppingConfirm';

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
  switch (activeTab) {
    case CartProcessTabType.ShoppingCart:
      return <ShoppingCart onNextStep={onNextStep} />;
    case CartProcessTabType.ShippingCheckout:
      return <ShoppingCheckOut onNextStep={onNextStep} />;
    case CartProcessTabType.Confirmation:
      return <ShoppingConfirm />;
  }
}

import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import ShoppingCheckOut from './ShoppingCheckOut';
import ShoppingConfirm from './ShoppingConfirm';

export enum CartProcessTabType {
  ShoppingCart = 0,
  ShippingCheckout = 1,
  Confirmation = 2,
}

interface TabContentProps {
  activeTabIndex: number;
  onNextStep: () => void;
}

export default function TabContent({
  activeTabIndex,
  onNextStep,
}: TabContentProps) {
  switch (activeTabIndex) {
    case CartProcessTabType.ShoppingCart:
      return <ShoppingCart onNextStep={onNextStep} />;
    case CartProcessTabType.ShippingCheckout:
      return <ShoppingCheckOut onNextStep={onNextStep} />;
    case CartProcessTabType.Confirmation:
      return <ShoppingConfirm />;
  }
}

import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import ShoppingCheckOut from './ShoppingCheckOut';
import ShoppingConfirm from './ShoppingConfirm';
import {CartResponse} from '@/types/cart';

export enum CartProcessTabType {
  ShoppingCart = 0,
  ShippingCheckout = 1,
  Confirmation = 2,
}

interface TabContentProps {
  activeTabIndex: number;
  onNextStep: () => void;
  cart: CartResponse;
}

export default function TabContent({
  activeTabIndex,
  onNextStep,
  cart,
}: TabContentProps) {
  switch (activeTabIndex) {
    case CartProcessTabType.ShoppingCart:
      return <ShoppingCart onNextStep={onNextStep} cart={cart} />;
    case CartProcessTabType.ShippingCheckout:
      return <ShoppingCheckOut onNextStep={onNextStep} cart={cart} />;
    case CartProcessTabType.Confirmation:
      return <ShoppingConfirm />;
  }
}

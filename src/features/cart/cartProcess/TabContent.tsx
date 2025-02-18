import styled from 'styled-components';
import ShoppingCart from './shoppingCart/ShoppingCart';
import ShoppingCheckOut from './shoppingCheckOut/ShoppingCheckOut';
import ShoppingConfirm from './ShoppingConfirm';
import {CartResponse} from '@/types/cart';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export enum CartProcessTabType {
  ShoppingCart = 0,
  ShoppingCheckOut = 1,
  ShoppingConfirm = 2,
}

interface TabContentProps {
  activeTabIndex: number;
  onNextStep: () => void;
  cart: CartResponse;
  orderId: string;
  setOrderId: (id: string) => void;
}

export default function TabContent({
  activeTabIndex,
  onNextStep,
  cart,
  orderId,
  setOrderId,
}: TabContentProps) {
  const queryClient = new QueryClient();

  switch (activeTabIndex) {
    case CartProcessTabType.ShoppingCart:
      return <ShoppingCart onNextStep={onNextStep} cart={cart} />;
    case CartProcessTabType.ShoppingCheckOut:
      return (
        <ShoppingCheckOut
          onNextStep={onNextStep}
          cart={cart}
          setOrderId={setOrderId}
        />
      );
    case CartProcessTabType.ShoppingConfirm:
      return (
        <QueryClientProvider client={queryClient}>
          <ShoppingConfirm orderId={orderId} />
        </QueryClientProvider>
      );
    default:
      return null;
  }
}

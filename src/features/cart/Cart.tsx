import styled from 'styled-components';
import Search from '../../components/Search';
import CartProcessTab from './cartProcess/CartProcessTab';
import {CartResponse} from '@/types/cart';

const Container = styled.div`
  background-color: #f5f7f8;
`;

const InnerContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 15px 0;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 15px;
`;

const EmptyCart = styled.div`
  text-align: center;
`;

const EmptyCartText = styled.p`
  font-size: 20px;
`;

export default function Cart({cart}: {cart: CartResponse}) {
  return (
    <Container>
      <Search />
      <InnerContainer>
        <Title>장바구니</Title>
        {cart.items.length > 0 ? (
          <CartProcessTab cart={cart} />
        ) : (
          <EmptyCart>
            <EmptyCartText>장바구니가 비었습니다.</EmptyCartText>
          </EmptyCart>
        )}
      </InnerContainer>
    </Container>
  );
}

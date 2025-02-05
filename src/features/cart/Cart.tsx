import styled from 'styled-components';
import Search from '../../components/Search';
import CartProcessTab from './cartProcess/CartProcessTab';
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

export default function Cart() {
  return (
    <Container>
      <Search />
      <InnerContainer>
        <Title>Cart</Title>
        <CartProcessTab />
      </InnerContainer>
    </Container>
  );
}

import styled from 'styled-components';
import { CartResponse } from '@/types/cart';
const Container = styled.div`
  background-color: #fff;
  width: 438px;
  height: auto;
  border-radius: 15px;
  padding: 15px;
`;

const TotalTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  display: block;
  padding: 10px 0 25px 10px;
  border-bottom: 1px solid #d7d7d7;
`;

const SubTotalContainer = styled.div`
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d7d7d7;
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ItemTitle = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: #001c30;
`;

const ItemValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
`;

const TotalContainer = styled.div`
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d7d7d7;
`;

const NameAddressContainer = styled.div`
  margin-top: 15px;
  padding-bottom: 15px;
`;

const CheckoutButton = styled.button`
  background-color: #f4ce14;
  color: #001c30;
  border-radius: 55px;
  padding: 15px;
  width: 100%;
  height: 58px;
  border: none;
  font-size: 24px;
  font-weight: medium;
  cursor: pointer;
`;

export default function ShoppingCartTotal({
  onNextStep,
  cart,
}: {
  onNextStep: () => void;
  cart: CartResponse;
}) {
  const { subtotal, deliveryCharge, total, user } = cart;
  const { fullName } = user;

  return (
    <Container>
      <TotalTitle>총 결제 금액</TotalTitle>
      <SubTotalContainer>
        <ItemRow>
          <ItemTitle>총 상품 금액</ItemTitle>
          <ItemValue>{subtotal.toLocaleString()}원</ItemValue>
        </ItemRow>
        <ItemRow>
          <ItemTitle>배송비</ItemTitle>
          <ItemValue>{deliveryCharge.toLocaleString()}원</ItemValue>
        </ItemRow>
      </SubTotalContainer>
      <TotalContainer>
        <ItemRow>
          <ItemTitle>총 결제 금액</ItemTitle>
          <ItemValue>{total.toLocaleString()}원</ItemValue>
        </ItemRow>
      </TotalContainer>
      <NameAddressContainer>
        <ItemRow>
          <ItemTitle>이름</ItemTitle>
          <ItemValue>{fullName}</ItemValue>
        </ItemRow>
      </NameAddressContainer>
      <CheckoutButton onClick={onNextStep}>결제하기</CheckoutButton>
    </Container>
  );
}

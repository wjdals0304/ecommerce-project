import styled from 'styled-components';

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
  border-bottom: 1px solid #d7d7d7;
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

const PaymentsMethodContainer = styled.div`
  margin-top: 15px;
  padding-bottom: 15px;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const PaymentLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
`;

const PrivacyText = styled.p`
  font-size: 14px;
  color: #8e96a4;
  margin-top: 15px;
  padding: 10px;
  line-height: 1.5;
`;

interface ShoppingCheckOutOrderProps {
  onNextStep: () => void;
}

export default function ShoppingCheckOutOrder({
  onNextStep,
}: ShoppingCheckOutOrderProps) {
  return (
    <Container>
      <TotalTitle>Total</TotalTitle>
      <SubTotalContainer>
        <ItemRow>
          <ItemTitle>Subtotal</ItemTitle>
          <ItemValue>1000</ItemValue>
        </ItemRow>
        <ItemRow>
          <ItemTitle>Delivery Charge</ItemTitle>
          <ItemValue>1000</ItemValue>
        </ItemRow>
      </SubTotalContainer>
      <TotalContainer>
        <ItemRow>
          <ItemTitle>Total</ItemTitle>
          <ItemValue>2000</ItemValue>
        </ItemRow>
      </TotalContainer>
      <NameAddressContainer>
        <ItemRow>
          <ItemTitle>Name</ItemTitle>
          <ItemValue>John Doe</ItemValue>
        </ItemRow>
        <ItemRow>
          <ItemTitle>Address</ItemTitle>
          <ItemValue>123 Main St, Anytown, USA</ItemValue>
        </ItemRow>
      </NameAddressContainer>
      <PaymentsMethodContainer>
        <PaymentOption>
          <RadioButton type="radio" name="payment" />
          <PaymentLabel>Direct Bank Transfer</PaymentLabel>
        </PaymentOption>
        <PaymentOption>
          <RadioButton type="radio" name="payment" />
          <PaymentLabel>Check Payments</PaymentLabel>
        </PaymentOption>
        <PaymentOption>
          <RadioButton type="radio" name="payment" />
          <PaymentLabel>Card Payment</PaymentLabel>
        </PaymentOption>
        <PrivacyText>
          In Additional To The Uses Listed in Our{' '}
          <strong>Privacy Policy</strong>, Your Personal Information Will Be
          Utilized to Fulfill Your Order and Enhance Your Online Experience.
        </PrivacyText>
      </PaymentsMethodContainer>

      <CheckoutButton onClick={onNextStep}>Place Order</CheckoutButton>
    </Container>
  );
}

import styled from 'styled-components';
import Image from 'next/image';
import confirmIcon from 'public/images/shop/confirm.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  padding: 25px;
  align-items: center;
  width: 696px;
  margin: 0 auto;
`;

const ConfirmImage = styled(Image)``;

const ConfirmText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  margin-top: 25px;
`;

const ConfirmSubText = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: #8e96a4;
  margin-top: 5px;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  padding: 25px;
`;

const OrderTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  padding: 10px 0 25px 10px;
  border-bottom: 1px solid #8e96a4;
  margin: 0 25px;
`;

const OrderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  padding: 25px 25px 15px;
  margin-top: 15px;
  gap: 15px;
`;

const OrderItemRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:nth-child(4) {
    padding-bottom: 25px;
    border-bottom: 1px solid #8e96a4;
  }
`;

const OrderItemTitle = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: #001c30;
  padding: 10px;
`;

const OrderItemValue = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: #001c30;
  width: 276px;
  padding: 10px;
  text-align: right;
`;

const NameAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0 25px;
  gap: 15px;
`;

const OrderButton = styled.button`
  background-color: #f4ce14;
  font-size: 24px;
  font-weight: medium;
  color: #001c30;
  border-radius: 55px;
  padding: 10px;
  width: 100%;
  height: 58px;
  margin-top: 15px;
  border: none;
`;

export default function ShoppingConfirm() {
  return (
    <Container>
      <ConfirmContainer>
        <ConfirmImage
          src={confirmIcon}
          alt="confirm"
          width={100}
          height={100}
        />
        <ConfirmText>Your Order Has Been Fulfilled</ConfirmText>
        <ConfirmSubText>
          I’m grateful. We have received your order.{' '}
        </ConfirmSubText>
      </ConfirmContainer>
      <OrderContainer>
        <OrderTitle>Order Details</OrderTitle>
        <OrderItemContainer>
          <OrderItemRow>
            <OrderItemTitle>Item Name</OrderItemTitle>
            <OrderItemValue>
              Axus Zens 123 Metalic Color I5 Ryzin Generation 10 16” FHD Laptop
            </OrderItemValue>
          </OrderItemRow>
          <OrderItemRow>
            <OrderItemTitle>Subtotal</OrderItemTitle>
            <OrderItemValue>$100.00</OrderItemValue>
          </OrderItemRow>
          <OrderItemRow>
            <OrderItemTitle>Delivery Charge</OrderItemTitle>
            <OrderItemValue>$100.00</OrderItemValue>
          </OrderItemRow>
          <OrderItemRow>
            <OrderItemTitle>Total</OrderItemTitle>
            <OrderItemValue>$100.00</OrderItemValue>
          </OrderItemRow>
        </OrderItemContainer>
        <NameAddressContainer>
          <OrderItemRow>
            <OrderItemTitle>Name</OrderItemTitle>
            <OrderItemValue>Martin Paez</OrderItemValue>
          </OrderItemRow>
          <OrderItemRow>
            <OrderItemTitle>Address</OrderItemTitle>
            <OrderItemValue>12334 London, Britania Raya</OrderItemValue>
          </OrderItemRow>
        </NameAddressContainer>
        <OrderButton>Track Order</OrderButton>
      </OrderContainer>
    </Container>
  );
}

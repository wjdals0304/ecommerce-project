import styled from 'styled-components';
import { OrderResponse } from '@/shared/types/order';
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

interface ShoppingConfirmItemProps {
  orderDetail: OrderResponse;
}

export default function ShoppingConfirmItem({
  orderDetail,
}: ShoppingConfirmItemProps) {
  return (
    <OrderItemContainer>
      {orderDetail.items.map(item => (
        <OrderItemRow key={item.id}>
          <OrderItemTitle>상품명</OrderItemTitle>
          <OrderItemValue>{item.product.name}</OrderItemValue>
        </OrderItemRow>
      ))}
      <OrderItemRow>
        <OrderItemTitle>총 상품 금액</OrderItemTitle>
        <OrderItemValue>
          {orderDetail.total_amount.toLocaleString()}원
        </OrderItemValue>
      </OrderItemRow>
      <OrderItemRow>
        <OrderItemTitle>결제 수단</OrderItemTitle>
        <OrderItemValue>
          {orderDetail.payment_method === 'BANK_TRANSFER'
            ? '현금 결제'
            : '카드 결제'}
        </OrderItemValue>
      </OrderItemRow>
    </OrderItemContainer>
  );
}

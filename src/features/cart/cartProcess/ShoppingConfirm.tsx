import styled from 'styled-components';
import Image from 'next/image';
import confirmIcon from 'public/images/shop/confirm.svg';
import {getRequest, getStoredToken} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import {OrderResponse} from '@/types/order';
import {useQuery} from '@tanstack/react-query';

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

interface ShoppingConfirmProps {
  orderId: string;
}

const fetchOrderDetail = async (orderId: string): Promise<OrderResponse> => {
  try {
    const token = getStoredToken();
    const response = await getRequest<OrderResponse>(
      `${API_ENDPOINTS.ORDERS}/${orderId}`,
      {},
      token,
    );
    return response.data;
  } catch (error) {
    throw new Error('주문 정보를 불러오는데 실패했습니다.');
  }
};

export default function ShoppingConfirm({orderId}: ShoppingConfirmProps) {
  const {
    data: orderDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['fetchOrderDetail', orderId],
    queryFn: () => fetchOrderDetail(orderId),
    enabled: !!orderId,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>주문 정보를 불러오는데 실패했습니다.</div>;
  if (!orderDetail) return <div>주문 정보를 찾을 수 없습니다.</div>;

  return (
    <Container>
      <ConfirmContainer>
        <ConfirmImage
          src={confirmIcon}
          alt="confirm"
          width={100}
          height={100}
        />
        <ConfirmText>주문이 완료되었습니다.</ConfirmText>
        <ConfirmSubText>
          주문해주셔서 감사합니다. 주문 내역을 확인해주세요.
        </ConfirmSubText>
      </ConfirmContainer>
      <OrderContainer>
        <OrderTitle>주문 내역</OrderTitle>
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
        <NameAddressContainer>
          <OrderItemRow>
            <OrderItemTitle>주문 일시</OrderItemTitle>
            <OrderItemValue>
              {new Date(orderDetail.created_at).toLocaleString()}
            </OrderItemValue>
          </OrderItemRow>
        </NameAddressContainer>
        <OrderButton>주문 내역 확인하기</OrderButton>
      </OrderContainer>
    </Container>
  );
}

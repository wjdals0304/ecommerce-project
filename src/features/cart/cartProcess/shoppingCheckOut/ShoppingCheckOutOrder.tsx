import styled from 'styled-components';
import {CartResponse} from '@/types/cart';
import {useState} from 'react';
import {postRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import {OrderResponse} from '@/types/order';

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

const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 12px;
  margin-top: 8px;
  margin-left: 10px;
  display: block;
`;

enum PaymentMethod {
  CASH = 'BANK_TRANSFER',
  CARD = 'CREDIT_CARD',
}

interface ShoppingCheckOutOrderProps {
  onNextStep: () => void;
  cart: CartResponse;
  isFormError: boolean;
  setOrderId: (id: string) => void;
}

export default function ShoppingCheckOutOrder({
  onNextStep,
  cart,
  isFormError,
  setOrderId,
}: ShoppingCheckOutOrderProps) {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>();
  const [paymentError, setPaymentError] = useState(false);

  const {subtotal, deliveryCharge, total, user} = cart;
  const {fullName} = user;

  const handlePaymentChange = (value: PaymentMethod) => {
    setSelectedPayment(value);
    setPaymentError(false);
  };

  const handleCheckout = async () => {
    try {
      if (!selectedPayment) {
        setPaymentError(true);
        return;
      }
      if (isFormError) {
        return;
      }

      let response = await postRequest<OrderResponse>(API_ENDPOINTS.ORDERS, {
        payment_method: selectedPayment,
      });

      const orderId = response.id;
      setOrderId(orderId.toString());
      onNextStep();
    } catch (error) {
      console.error(error);
    }
  };

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
      <PaymentsMethodContainer>
        <PaymentOption>
          <PaymentLabel htmlFor="cash">
            <RadioButton
              type="radio"
              name="payment"
              id="cash"
              value={PaymentMethod.CASH}
              checked={selectedPayment === PaymentMethod.CASH}
              onChange={e =>
                handlePaymentChange(e.target.value as PaymentMethod)
              }
            />
            현금 결제
          </PaymentLabel>
        </PaymentOption>
        <PaymentOption>
          <PaymentLabel htmlFor="card">
            <RadioButton
              type="radio"
              name="payment"
              id="card"
              value={PaymentMethod.CARD}
              checked={selectedPayment === PaymentMethod.CARD}
              onChange={e =>
                handlePaymentChange(e.target.value as PaymentMethod)
              }
            />
            카드 결제
          </PaymentLabel>
        </PaymentOption>
        {paymentError && <ErrorMessage>결제 수단을 선택해주세요</ErrorMessage>}
      </PaymentsMethodContainer>
      <CheckoutButton
        onClick={handleCheckout}
        disabled={isFormError}
        style={{opacity: isFormError ? 0.5 : 1}}
      >
        주문하기
      </CheckoutButton>
      {isFormError && (
        <ErrorMessage>배송 정보의 필수 항목을 모두 입력해주세요</ErrorMessage>
      )}
    </Container>
  );
}

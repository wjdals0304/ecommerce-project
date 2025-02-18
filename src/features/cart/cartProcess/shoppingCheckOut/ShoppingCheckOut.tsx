import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import {CartResponse} from '@/types/cart';
import {postRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import ShoppingCheckOutOrder from '../shoppingCheckOut/ShoppingCheckOutOrder';
import {useState} from 'react';
import ShoppingCheckOutInfo from '../shoppingCheckOut/ShoppingCheckOutInfo';
const Container = styled.div`
  display: flex;
  gap: 25px;
  align-items: flex-start;
`;

const BillingContainer = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 804px;
  height: auto;
  padding: 15px;
`;

const BillingDetail = styled.span`
  font-size: 24px;
  font-weight: medium;
  color: #001c30;
  padding: 10px 0;
  border-bottom: 1px solid #8e96a4;
  display: block;
`;

export interface ShippingFormData {
  name: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  orderNote: string;
}

interface ShoppingCheckOutProps {
  onNextStep: () => void;
  cart: CartResponse;
}

export default function ShoppingCheckOut({
  onNextStep,
  cart,
}: ShoppingCheckOutProps) {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<ShippingFormData>({
    mode: 'onChange',
  });

  const [isFormError, setIsFormError] = useState(false);

  const name = watch('name');
  const phone = watch('phone');
  const address = watch('address');
  const city = watch('city');
  const zipCode = watch('zipCode');

  const hasEmptyFields = !name || !phone || !address || !city || !zipCode;

  const hasFormErrors = !!(
    errors.name ||
    errors.phone ||
    errors.address ||
    errors.city ||
    errors.zipCode
  );

  const onSubmit = async (data: ShippingFormData) => {
    try {
      await postRequest(API_ENDPOINTS.SHIPPING_ADDRESS, data);
      console.log('배송 정보 저장 성공');
      setIsFormError(false);
    } catch (error) {
      console.error(error);
      setIsFormError(true);
    }
  };

  return (
    <Container>
      <BillingContainer>
        <BillingDetail>배송 정보</BillingDetail>
        <ShoppingCheckOutInfo
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </BillingContainer>
      <ShoppingCheckOutOrder
        onNextStep={onNextStep}
        cart={cart}
        isFormError={isFormError || hasEmptyFields || hasFormErrors}
      />
    </Container>
  );
}

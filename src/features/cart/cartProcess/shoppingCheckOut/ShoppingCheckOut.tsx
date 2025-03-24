import {API_ENDPOINTS} from '@/config/apiEndPoints';
import {shippingSchema} from '@/config/validationSchema';
import {CartResponse} from '@/types/cart';
import {postRequest} from '@/utils/apiClient';
import {yupResolver} from '@hookform/resolvers/yup';
import {useState} from 'react';
import {FormProvider, Resolver, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import styled from 'styled-components';
import ShoppingCheckOutInfo from '../shoppingCheckOut/ShoppingCheckOutInfo';
import ShoppingCheckOutOrder from '../shoppingCheckOut/ShoppingCheckOutOrder';

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
  zipcode: string;
  memo: string;
}

interface ShoppingCheckOutProps {
  onNextStep: () => void;
  cart: CartResponse;
  setOrderId: (id: string) => void;
}

export default function ShoppingCheckOut({
  onNextStep,
  cart,
  setOrderId,
}: ShoppingCheckOutProps) {
  const methods = useForm<ShippingFormData>({
    resolver: yupResolver(shippingSchema) as Resolver<ShippingFormData>,
    mode: 'onChange',
  });

  const {
    formState: {errors},
    watch,
  } = methods;

  const [isFormError, setIsFormError] = useState(false);

  const name = watch('name');
  const phone = watch('phone');
  const address = watch('address');
  const city = watch('city');
  const zipCode = watch('zipcode');

  const hasEmptyFields = !name || !phone || !address || !city || !zipCode;
  const hasFormErrors = !!(
    errors.name ||
    errors.phone ||
    errors.address ||
    errors.city ||
    errors.zipcode
  );

  const onSubmit = async (data: ShippingFormData) => {
    try {
      await postRequest({
        url: API_ENDPOINTS.SHIPPING_ADDRESS,
        data,
      });
      toast.success('배송 정보 저장 성공');
      setIsFormError(false);
    } catch (error) {
      console.error(error);
      setIsFormError(true);
    }
  };

  return (
    <FormProvider {...methods}>
      <Container>
        <BillingContainer>
          <BillingDetail>배송 정보</BillingDetail>
          <ShoppingCheckOutInfo onSubmit={onSubmit} />
        </BillingContainer>
        <ShoppingCheckOutOrder
          onNextStep={onNextStep}
          cart={cart}
          isFormError={isFormError || hasEmptyFields || hasFormErrors}
          setOrderId={setOrderId}
        />
      </Container>
    </FormProvider>
  );
}

import {Resolver, useForm, FormProvider} from 'react-hook-form';
import styled from 'styled-components';
import {CartResponse} from '@/types/cart';
import {postRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
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
  zipcode: string;
  memo: string;
}

interface ShoppingCheckOutProps {
  onNextStep: () => void;
  cart: CartResponse;
}

const shippingSchema = yup.object().shape({
  name: yup
    .string()
    .required('이름을 입력해주세요')
    .min(2, '2자 이상 입력해주세요'),
  phone: yup
    .string()
    .required('전화번호를 입력해주세요')
    .matches(/^[0-9]{10,11}$/, '올바른 전화번호를 입력해주세요'),
  address: yup.string().required('주소를 입력해주세요'),
  city: yup.string().required('도/시를 입력해주세요'),
  zipcode: yup
    .string()
    .required('우편번호를 입력해주세요')
    .matches(/^\d{5}$/, '올바른 우편번호를 입력해주세요'),
  memo: yup.string(),
});

export default function ShoppingCheckOut({
  onNextStep,
  cart,
}: ShoppingCheckOutProps) {
  const methods = useForm<ShippingFormData>({
    resolver: yupResolver(shippingSchema) as Resolver<ShippingFormData>,
    mode: 'onChange',
  });

  const {
    formState: {errors},
    watch,
    handleSubmit,
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
      await postRequest(API_ENDPOINTS.SHIPPING_ADDRESS, data);
      console.log('배송 정보 저장 성공');
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
        />
      </Container>
    </FormProvider>
  );
}

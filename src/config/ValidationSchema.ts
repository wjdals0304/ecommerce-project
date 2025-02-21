import * as yup from 'yup';
import {ShippingFormData} from '@/features/cart/cartProcess/shoppingCheckOut/ShoppingCheckOut';

const phoneRegex = /^[0-9]{10,11}$/;
const zipcodeRegex = /^[0-9]{5}$/;

export const shippingSchema = yup.object().shape({
  name: yup
    .string()
    .required('이름을 입력해주세요')
    .min(2, '2자 이상 입력해주세요'),
  phone: yup
    .string()
    .required('전화번호를 입력해주세요')
    .matches(phoneRegex, '올바른 전화번호를 입력해주세요'),
  address: yup.string().required('주소를 입력해주세요'),
  city: yup.string().required('도/시를 입력해주세요'),
  zipcode: yup
    .string()
    .required('우편번호를 입력해주세요')
    .matches(zipcodeRegex, '올바른 우편번호를 입력해주세요'),
  memo: yup.string(),
}) as yup.ObjectSchema<ShippingFormData>;

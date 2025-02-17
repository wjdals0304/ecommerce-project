import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import styled from 'styled-components';
import {ShippingFormData} from './ShoppingCheckOut';

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
  padding-bottom: 25px;

  border-bottom: 1px solid #8e96a4;
`;

const InputRow = styled.div`
  display: flex;
  gap: 15px;
`;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputBox = styled.input<{hasError?: boolean}>`
  flex: 1;
  height: 49px;
  border: 1px solid ${({hasError}) => (hasError ? '#ff0000' : '#8e96a4')};
  border-radius: 25px;
  background-color: #f5f7f8;
  padding: 15px;

  &:focus {
    outline: none;
    border-color: ${({hasError}) => (hasError ? '#ff0000' : '#001c30')};
  }
`;

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const SaveButton = styled.button`
  background-color: #001c30;
  color: #fff;
  border-radius: 55px;
  padding: 15px;
  width: 161px;
  height: 58px;
  font-size: 24px;
  font-weight: medium;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 12px;
  margin-left: 10px;
`;

export default function ShoppingCheckOutInfo({
  errors,
  register,
  onSubmit,
  handleSubmit,
}: {
  errors: FieldErrors<ShippingFormData>;
  register: UseFormRegister<ShippingFormData>;
  onSubmit: (data: ShippingFormData) => void;
  handleSubmit: UseFormHandleSubmit<ShippingFormData>;
}) {
  return (
    <InputContainer onSubmit={handleSubmit(onSubmit)}>
      <InputRow>
        <InputBoxContainer>
          <InputBox
            hasError={!!errors.name}
            {...register('name', {
              required: '이름을 입력해주세요',
              minLength: {value: 2, message: '2자 이상 입력해주세요'},
            })}
            placeholder="이름"
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputBoxContainer>
        <InputBoxContainer>
          <InputBox
            hasError={!!errors.phone}
            {...register('phone', {
              required: '전화번호를 입력해주세요',
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: '올바른 전화번호를 입력해주세요',
              },
            })}
            placeholder="전화번호"
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </InputBoxContainer>
      </InputRow>

      <InputBoxContainer>
        <InputBox
          hasError={!!errors.address}
          {...register('address', {required: '주소를 입력해주세요'})}
          placeholder="주소"
        />
        {errors.address && (
          <ErrorMessage>{errors.address.message}</ErrorMessage>
        )}
      </InputBoxContainer>

      <InputRow>
        <InputBoxContainer>
          <InputBox
            hasError={!!errors.city}
            {...register('city', {required: '도/시를 입력해주세요'})}
            placeholder="도/시"
          />
          {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
        </InputBoxContainer>

        <InputBoxContainer>
          <InputBox
            hasError={!!errors.zipCode}
            {...register('zipCode', {
              required: '우편번호를 입력해주세요',
              pattern: {
                value: /^\d{5}$/,
                message: '올바른 우편번호를 입력해주세요',
              },
            })}
            placeholder="우편번호"
          />
          {errors.zipCode && (
            <ErrorMessage>{errors.zipCode.message}</ErrorMessage>
          )}
        </InputBoxContainer>
      </InputRow>

      <InputRow>
        <InputBox {...register('orderNote')} placeholder="주문 메모" />
      </InputRow>
      <SaveButtonContainer>
        <SaveButton type="submit">저장하기</SaveButton>
      </SaveButtonContainer>
    </InputContainer>
  );
}

import { useShipInfo } from '@/hooks/useShipInfo';
import { useEffect } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { ShippingFormData } from './ShoppingCheckOut';

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

const InputBox = styled.input<{ hasError?: boolean }>`
  flex: 1;
  height: 49px;
  border: 1px solid ${({ hasError }) => (hasError ? '#ff0000' : '#8e96a4')};
  border-radius: 25px;
  background-color: #f5f7f8;
  padding: 15px;

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? '#ff0000' : '#001c30')};
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
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 12px;
  margin-left: 10px;
`;

interface ShoppingCheckOutInfoProps {
  onSubmit: (data: ShippingFormData) => void;
}

export default function ShoppingCheckOutInfo({
  onSubmit,
}: ShoppingCheckOutInfoProps) {
  const { data: shipInfo } = useShipInfo();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext<ShippingFormData>();

  useEffect(() => {
    if (shipInfo) {
      reset({
        name: shipInfo.name || '',
        phone: shipInfo.phone || '',
        address: shipInfo.address || '',
        city: shipInfo.city || '',
        zipcode: shipInfo.zipcode || '',
        memo: shipInfo.memo || '',
      });
    }
  }, [shipInfo, reset]);

  const { field: nameField } = useController({
    name: 'name',
    control,
  });

  const { field: phoneField } = useController({
    name: 'phone',
    control,
  });

  const { field: addressField } = useController({
    name: 'address',
    control,
  });

  const { field: cityField } = useController({
    name: 'city',
    control,
  });

  const { field: zipcodeField } = useController({
    name: 'zipcode',
    control,
  });

  const { field: memoField } = useController({
    name: 'memo',
    control,
  });

  return (
    <InputContainer onSubmit={handleSubmit(onSubmit)}>
      <InputRow>
        <InputBoxContainer>
          <InputBox
            hasError={!!errors.name}
            {...nameField}
            placeholder="이름"
            defaultValue={shipInfo?.name}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputBoxContainer>
        <InputBoxContainer>
          <InputBox
            hasError={!!errors.phone}
            {...phoneField}
            placeholder="전화번호"
            defaultValue={shipInfo?.phone}
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </InputBoxContainer>
      </InputRow>

      <InputBoxContainer>
        <InputBox
          hasError={!!errors.address}
          {...addressField}
          placeholder="주소"
          defaultValue={shipInfo?.address}
        />
        {errors.address && (
          <ErrorMessage>{errors.address.message}</ErrorMessage>
        )}
      </InputBoxContainer>

      <InputRow>
        <InputBoxContainer>
          <InputBox
            hasError={!!errors.city}
            {...cityField}
            placeholder="도/시"
            defaultValue={shipInfo?.city}
          />
          {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
        </InputBoxContainer>
        <InputBoxContainer>
          <InputBox
            hasError={!!errors.zipcode}
            {...zipcodeField}
            placeholder="우편번호"
            defaultValue={shipInfo?.zipcode}
          />
          {errors.zipcode && (
            <ErrorMessage>{errors.zipcode.message}</ErrorMessage>
          )}
        </InputBoxContainer>
      </InputRow>

      <InputRow>
        <InputBox
          {...memoField}
          placeholder="주문 메모"
          defaultValue={shipInfo?.memo}
        />
      </InputRow>
      <SaveButtonContainer>
        <SaveButton type="submit">저장하기</SaveButton>
      </SaveButtonContainer>
    </InputContainer>
  );
}

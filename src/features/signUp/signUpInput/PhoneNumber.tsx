import {useState} from 'react';
import styled from 'styled-components';
import {inputStyles, ErrorMessage} from './CommonStyle';

const PhoneNumberInput = styled.input<{isError: boolean}>`
  ${inputStyles};
`;

const PhoneNumberContainer = styled.div`
  position: relative;
`;

interface PhoneNumberProps {
  phoneNumberError: string;
  setPhoneNumberError: (error: string) => void;
  phoneNumberValue: string;
  setPhoneNumberValue: (value: string) => void;
}

export default function PhoneNumber({
  phoneNumberError,
  setPhoneNumberError,
  phoneNumberValue,
  setPhoneNumberValue,
}: PhoneNumberProps) {
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = value.length > 0 && /^[0-9]*$/.test(value);

    setPhoneNumberValue(value);
    setPhoneNumberError(isValid ? '' : '숫자만 입력할 수 있습니다.');
  };

  return (
    <PhoneNumberContainer>
      <PhoneNumberInput
        placeholder="핸드폰 번호 (예: 01012345678)"
        value={phoneNumberValue}
        onChange={handlePhoneNumberChange}
        isError={phoneNumberError !== ''}
        name="phoneNumber"
        type="text"
      />
      {phoneNumberError && <ErrorMessage>{phoneNumberError}</ErrorMessage>}
    </PhoneNumberContainer>
  );
}

import {useState} from 'react';
import styled from 'styled-components';
import {inputStyles, ErrorMessage} from './CommonStyle';

const PhoneNumberInput = styled.input<{isValid: boolean}>`
  ${inputStyles};
`;

const PhoneNumberContainer = styled.div`
  position: relative;
`;

interface PhoneNumberProps {
  phoneNumberError: string;
  setPhoneNumberError: (error: string) => void;
}

export default function PhoneNumber({
  phoneNumberError,
  setPhoneNumberError,
}: PhoneNumberProps) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = value.length > 0 && /^[0-9]*$/.test(value);

    setPhoneNumber(value);
    setPhoneNumberError(isValid ? '' : '숫자만 입력할 수 있습니다.');
  };

  return (
    <PhoneNumberContainer>
      <PhoneNumberInput
        placeholder="핸드폰 번호 (예: 01012345678)"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        isValid={phoneNumberError === ''}
        name="phoneNumber"
        type="text"
      />
      {phoneNumberError && <ErrorMessage>{phoneNumberError}</ErrorMessage>}
    </PhoneNumberContainer>
  );
}

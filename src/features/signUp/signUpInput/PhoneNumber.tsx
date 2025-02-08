import {useState} from 'react';
import styled from 'styled-components';
import {inputStyles, ErrorMessage} from './CommonStyle';

const PhoneNumberInput = styled.input<{isValid: boolean}>`
  ${inputStyles};
`;

const PhoneNumberContainer = styled.div`
  position: relative;
`;

export default function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[0-9]*$/.test(value);
    setIsPhoneNumberValid(isValid);
    setPhoneNumber(value);
    setPhoneNumberError(isValid ? '' : '숫자만 입력할 수 있습니다.');
  };

  return (
    <PhoneNumberContainer>
      <PhoneNumberInput
        placeholder="핸드폰 번호 (예: 01012345678)"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        isValid={isPhoneNumberValid}
        name="phoneNumber"
        type="text"
      />
      {!isPhoneNumberValid && <ErrorMessage>{phoneNumberError}</ErrorMessage>}
    </PhoneNumberContainer>
  );
}

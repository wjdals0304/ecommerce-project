import {useState} from 'react';
import {inputStyles, ErrorMessage} from './CommonStyle';
import styled from 'styled-components';

const EmailInput = styled.input<{isValid: boolean}>`
  ${inputStyles};
`;

const EmailContainer = styled.div`
  position: relative;
`;

export default function Email() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = value === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setIsEmailValid(isValid);
    setEmail(value);
    setEmailError(isValid ? '' : '유효한 이메일 주소를 입력하세요.');
  };

  return (
    <EmailContainer>
      <EmailInput
        placeholder="이메일 (예: example@gmail.com)"
        value={email}
        onChange={handleEmailChange}
        isValid={isEmailValid}
        name="email"
        type="text"
      />
      {!isEmailValid && <ErrorMessage>{emailError}</ErrorMessage>}
    </EmailContainer>
  );
}

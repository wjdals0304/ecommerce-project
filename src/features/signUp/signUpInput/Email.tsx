import {useState} from 'react';
import {inputStyles, ErrorMessage} from './CommonStyle';
import styled from 'styled-components';

const EmailInput = styled.input<{isValid: boolean}>`
  ${inputStyles};
`;

const EmailContainer = styled.div`
  position: relative;
`;

interface EmailProps {
  setIsEmailValid: (isValid: boolean) => void;
  emailError: string;
  clearEmailError: () => void;
}

export default function Email({
  setIsEmailValid,
  emailError,
  clearEmailError,
}: EmailProps) {
  const [email, setEmail] = useState('');
  const [isEmailValidLocal, setIsEmailValidLocal] = useState(true);
  const [localEmailError, setLocalEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setIsEmailValidLocal(isValid);
    setIsEmailValid(isValid);
    setEmail(value);
    setLocalEmailError(isValid ? '' : '유효한 이메일 주소를 입력하세요.');
    clearEmailError();
  };

  return (
    <EmailContainer>
      <EmailInput
        placeholder="이메일 (예: example@gmail.com)"
        value={email}
        onChange={handleEmailChange}
        isValid={isEmailValidLocal}
        name="email"
        type="text"
      />
      {(!isEmailValidLocal || emailError) && (
        <ErrorMessage>{emailError || localEmailError}</ErrorMessage>
      )}{' '}
    </EmailContainer>
  );
}

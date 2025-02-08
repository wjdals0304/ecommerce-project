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
  emailError: string;
  setEmailError: (error: string) => void;
}

export default function Email({emailError, setEmailError}: EmailProps) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (isValid) {
      setEmailError('');
    } else {
      setEmailError('유효한 이메일 주소를 입력하세요.');
    }
    setEmail(value);
  };

  return (
    <EmailContainer>
      <EmailInput
        placeholder="이메일 (예: example@gmail.com)"
        value={email}
        onChange={handleEmailChange}
        isValid={emailError === ''}
        name="email"
        type="text"
      />
      {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
    </EmailContainer>
  );
}

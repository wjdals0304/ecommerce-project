import { inputStyles, ErrorMessage } from './CommonStyle';
import styled from 'styled-components';

const EmailInput = styled.input<{ isError: boolean }>`
  ${inputStyles};
`;

const EmailContainer = styled.div`
  position: relative;
  width: 100%;
`;

interface EmailProps {
  emailError: string;
  setEmailError: (error: string) => void;
  setEmailValue: (value: string) => void;
  showEmailErrorBorder?: boolean;
  emailValue: string;
}

export default function Email({
  emailError,
  setEmailError,
  setEmailValue,
  showEmailErrorBorder = false,
  emailValue,
}: EmailProps) {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (isValid) {
      setEmailError('');
    } else {
      setEmailError('유효한 이메일 주소를 입력하세요.');
    }

    setEmailValue(value);
  };

  return (
    <EmailContainer>
      <EmailInput
        placeholder="이메일 (예: example@gmail.com)"
        value={emailValue}
        onChange={handleEmailChange}
        isError={emailError !== '' || showEmailErrorBorder}
        name="email"
        type="text"
      />
      {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
    </EmailContainer>
  );
}

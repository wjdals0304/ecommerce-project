import {useState} from 'react';
import styled from 'styled-components';
import {inputStyles, ErrorMessage} from './CommonStyle';
import passwordIcon from '../../../../public/images/signIn/password.svg';
import Image from 'next/image';
const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const PasswordInput = styled.input<{isValid: boolean}>`
  ${inputStyles};
`;

const PasswordIcon = styled(Image)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 25px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

interface PasswordProps {
  passwordError: string;
  setPasswordError: (error: string) => void;
}

export default function Password({
  passwordError,
  setPasswordError,
}: PasswordProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = value.length > 0 && value.length <= 10;
    setPassword(value);
    setPasswordError(isValid ? '' : '비밀번호는 최대 10자까지 가능합니다.');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <PasswordContainer>
      <PasswordInput
        type={showPassword ? 'text' : 'password'}
        placeholder="비밀번호 (최대 10자)"
        value={password}
        onChange={handlePasswordChange}
        isValid={passwordError === ''}
        name="password"
      />
      <PasswordIcon
        src={passwordIcon}
        alt="Password"
        onClick={togglePasswordVisibility}
      />
      {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
    </PasswordContainer>
  );
}

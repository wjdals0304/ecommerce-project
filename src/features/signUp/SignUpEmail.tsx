import styled, {css} from 'styled-components';
import Image from 'next/image';
import passwordIcon from '../../../public/images/signIn/password.svg';
import {useState} from 'react';
import {API_ENDPOINTS} from '../../config/ApiEndPoints';
import apiClient from '@/utils/apiClient';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 584px;
  margin: 43px auto;
`;

const inputStyles = css<{isValid: boolean}>`
  width: 100%;
  height: 58px;
  border: 1px solid ${({isValid}) => (isValid ? '#b6bbc4' : 'red')};
  border-radius: 55px;
  padding: 15px 25px;

  &::placeholder {
    color: #ababcb;
  }
`;

const FullNameInput = styled.input<{isValid: boolean}>`
  ${inputStyles}
`;

const FullNameContainer = styled.div`
  position: relative;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-left: 10px;
  position: absolute;
  bottom: -18px;
  left: 2px;
`;

const EmailInput = styled.input<{isValid: boolean}>`
  ${inputStyles}
`;

const EmailContainer = styled.div`
  position: relative;
`;

const PhoneNumberInput = styled.input<{isValid: boolean}>`
  ${inputStyles}
`;

const PhoneNumberContainer = styled.div`
  position: relative;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const PasswordInput = styled.input<{isValid: boolean}>`
  ${inputStyles}
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

const SignUpButton = styled.button`
  width: 100%;
  height: 58px;
  border-radius: 55px;
  background-color: #f4ce14;
  color: #001c30;
  font-size: 24px;
  font-weight: medium;
  border: none;
`;

export default function SignUpEmail() {
  const [fullName, setFullName] = useState('');
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [fullNameError, setFullNameError] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]*$/.test(value);
    setIsFullNameValid(isValid);
    setFullName(value);
    setFullNameError(isValid ? '' : '이름은 문자만 포함할 수 있습니다.');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = value === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setIsEmailValid(isValid);
    setEmail(value);
    setEmailError(isValid ? '' : '유효한 이메일 주소를 입력하세요.');
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[0-9]*$/.test(value);
    setIsPhoneNumberValid(isValid);
    setPhoneNumber(value);
    setPhoneNumberError(isValid ? '' : '숫자만 입력할 수 있습니다.');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = value.length <= 10;
    setIsPasswordValid(isValid);
    setPassword(value);
    setPasswordError(isValid ? '' : '비밀번호는 최대 10자까지 가능합니다.');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSignUp = async () => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.SIGNUP_EMAIL, {
        full_name: fullName,
        email: email,
        phone_number: phoneNumber,
        password_hash: password,
      });
      if (response.status === 200) {
        // 홈으로 이동
        console.log('Sign up successful:', response.data);
      }
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return (
    <SignUpContainer>
      <FullNameContainer>
        <FullNameInput
          placeholder="이름 (예: 홍길동)"
          value={fullName}
          onChange={handleFullNameChange}
          isValid={isFullNameValid}
        />
        {!isFullNameValid && <ErrorMessage>{fullNameError}</ErrorMessage>}
      </FullNameContainer>
      <EmailContainer>
        <EmailInput
          placeholder="이메일 (예: example@gmail.com)"
          value={email}
          onChange={handleEmailChange}
          isValid={isEmailValid}
        />
        {!isEmailValid && <ErrorMessage>{emailError}</ErrorMessage>}
      </EmailContainer>
      <PhoneNumberContainer>
        <PhoneNumberInput
          placeholder="핸드폰 번호 (예: 01012345678)"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          isValid={isPhoneNumberValid}
        />
        {!isPhoneNumberValid && <ErrorMessage>{phoneNumberError}</ErrorMessage>}
      </PhoneNumberContainer>
      <PasswordContainer>
        <PasswordInput
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호 (최대 10자)"
          value={password}
          onChange={handlePasswordChange}
          isValid={isPasswordValid}
        />
        <PasswordIcon
          src={passwordIcon}
          alt="Password"
          onClick={togglePasswordVisibility}
        />
        {!isPasswordValid && <ErrorMessage>{passwordError}</ErrorMessage>}
      </PasswordContainer>
      <SignUpButton onClick={handleSignUp}>회원가입</SignUpButton>
    </SignUpContainer>
  );
}

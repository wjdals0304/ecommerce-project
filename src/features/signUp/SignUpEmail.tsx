import styled from 'styled-components';
import {API_ENDPOINTS} from '../../config/ApiEndPoints';
import apiClient from '@/utils/apiClient';
import {useState} from 'react';
import {useRouter} from 'next/router';
import FullName from './signUpInput/FullName';
import Email from './signUpInput/Email';
import PhoneNumber from './signUpInput/PhoneNumber';
import Password from './signUpInput/Password';
import ErrorModal from '../../components/PopUpModal';

const SignUpContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 584px;
  margin: 43px auto;
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
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default function SignUpEmail() {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [isFullNameValid, setIsFullNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const response = await apiClient.post(API_ENDPOINTS.SIGNUP_EMAIL, {
        full_name: data.fullName,
        email: data.email,
        phone_number: data.phoneNumber,
        password_hash: data.password,
      });

      if (response.status >= 200 && response.status < 300) {
        router.push('/');
      } else {
        setErrorMessage('회원가입에 실패했습니다. 다시 시도해주세요.');
        setShowErrorModal(true);
      }
    } catch (error) {
      if (error.response.status === 409) {
        setEmailError('이미 가입된 이메일입니다.');
      } else {
        setErrorMessage('회원가입에 실패했습니다. 다시 시도해주세요.');
        setShowErrorModal(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    isFullNameValid && isEmailValid && isPhoneNumberValid && isPasswordValid;

  return (
    <>
      <SignUpContainer onSubmit={handleSignUp} method="POST">
        <FullName setIsFullNameValid={setIsFullNameValid} />
        <Email
          setIsEmailValid={setIsEmailValid}
          emailError={emailError}
          clearEmailError={() => setEmailError('')}
        />
        <PhoneNumber setIsPhoneNumberValid={setIsPhoneNumberValid} />
        <Password setIsPasswordValid={setIsPasswordValid} />
        <SignUpButton type="submit" disabled={isLoading || !isFormValid}>
          {isLoading ? '로딩 중...' : '회원가입'}
        </SignUpButton>
      </SignUpContainer>
      {showErrorModal && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setShowErrorModal(false)}
        />
      )}
    </>
  );
}

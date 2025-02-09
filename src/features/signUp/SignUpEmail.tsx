import styled from 'styled-components';
import {API_ENDPOINTS} from '../../config/ApiEndPoints';
import {useState} from 'react';
import {useRouter} from 'next/router';
import FullName from './signUpInput/FullName';
import Email from './signUpInput/Email';
import PhoneNumber from './signUpInput/PhoneNumber';
import Password from './signUpInput/Password';
import ErrorModal from '../../components/PopUpModal';
import Cookies from 'js-cookie';
import {postRequest, formDataEntries} from '@/utils/apiClient';

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
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const data = formDataEntries(event);
    const dataPost = {
      full_name: data.fullName,
      email: data.email,
      phone_number: data.phoneNumber,
      password_hash: data.password,
    };

    try {
      const response = await postRequest(API_ENDPOINTS.SIGNUP_EMAIL, dataPost);
      const token = response.data.token;

      Cookies.set('jwt', token, {expires: 1});
      router.push('/');
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

  const isEmailValid = emailError === '';
  const isPhoneNumberValid = phoneNumberError === '';
  const isPasswordValid = passwordError === '';
  const isFullNameValid = fullNameError === '';

  const isFormValid =
    isFullNameValid && isEmailValid && isPhoneNumberValid && isPasswordValid;

  const disabled = isLoading || !isFormValid;

  return (
    <>
      <SignUpContainer onSubmit={handleSubmit} method="POST">
        <FullName
          fullNameError={fullNameError}
          setFullNameError={setFullNameError}
        />
        <Email emailError={emailError} setEmailError={setEmailError} />
        <PhoneNumber
          phoneNumberError={phoneNumberError}
          setPhoneNumberError={setPhoneNumberError}
        />
        <Password
          passwordError={passwordError}
          setPasswordError={setPasswordError}
        />
        <SignUpButton type="submit" disabled={disabled}>
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

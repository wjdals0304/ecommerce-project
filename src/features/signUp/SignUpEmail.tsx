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
import {postRequest, formDataEntries, getToken} from '@/utils/apiClient';

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
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [fullNameValue, setFullNameValue] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const data = formDataEntries(event);
    const formData = {
      full_name: data.fullName,
      email: data.email,
      phone_number: data.phoneNumber,
      password_hash: data.password,
    };

    if (data.fullName === '') {
      setFullNameError('이름을 입력해주세요.');
    }
    if (data.email === '') {
      setEmailError('이메일을 입력해주세요.');
    }
    if (data.phoneNumber === '') {
      setPhoneNumberError('전화번호를 입력해주세요.');
    }
    if (data.password === '') {
      setPasswordError('비밀번호를 입력해주세요.');
    }

    try {
      const response = await postRequest({
        url: API_ENDPOINTS.AUTH_SIGNUP_EMAIL,
        data: formData,
      });
      const token = getToken(response);
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

  const isEmailError = emailError !== '';
  const isPhoneNumberError = phoneNumberError !== '';
  const isPasswordError = passwordError !== '';
  const isFullNameError = fullNameError !== '';

  const isFormError =
    isFullNameError || isEmailError || isPhoneNumberError || isPasswordError;
  const disabled = isLoading || isFormError;

  return (
    <>
      <SignUpContainer onSubmit={handleSubmit} method="POST">
        <FullName
          fullNameError={fullNameError}
          setFullNameError={setFullNameError}
          fullNameValue={fullNameValue}
          setFullNameValue={setFullNameValue}
        />
        <Email
          emailError={emailError}
          setEmailError={setEmailError}
          emailValue={emailValue}
          setEmailValue={setEmailValue}
        />
        <PhoneNumber
          phoneNumberError={phoneNumberError}
          setPhoneNumberError={setPhoneNumberError}
          phoneNumberValue={phoneNumberValue}
          setPhoneNumberValue={setPhoneNumberValue}
        />
        <Password
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          passwordValue={passwordValue}
          setPasswordValue={setPasswordValue}
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

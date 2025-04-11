import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import { useAuthStore } from '@/store/authStore';
import { User } from '@/shared/types/user';
import { formDataEntries, postRequest } from '@/shared/lib/apiClient';
import { setAuthCookie } from '@/shared/lib/cookieUtils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import Email from '../signUp/signUpInput/Email';
import Password from '../signUp/signUpInput/Password';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7f8;
  gap: 25px;
  margin: 43px auto 0;
  width: 584px;
`;

const SignInButton = styled.button`
  width: 100%;
  height: 58px;
  background-color: #f4ce14;
  color: #fff;
  border-radius: 55px;
  font-size: 24px;
  font-weight: medium;
  color: #001c30;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function SignInEmail() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [showEmailErrorBorder, setShowEmailErrorBorder] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { setAuth } = useAuthStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const data = formDataEntries(event);
    const dataPost = {
      email: data.email,
      password_hash: data.password,
    };

    if (data.email === '') {
      setEmailError('이메일을 입력해주세요.');
    }
    if (data.password === '') {
      setPasswordError('비밀번호를 입력해주세요.');
    }

    try {
      const response = await postRequest<User>({
        url: API_ENDPOINTS.AUTH_SIGNIN_EMAIL,
        data: dataPost,
      });

      setAuth(true, response.data);
      setAuthCookie(true);
      router.push('/');
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        setPasswordError('이메일 또는 비밀번호가 일치하지 않습니다.');
        setShowEmailErrorBorder(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isEmailError = emailError !== '';
  const isPasswordError = passwordError !== '';
  const isFormError = isEmailError || isPasswordError;
  const disabled = isLoading || isFormError;

  return (
    <Container onSubmit={handleSubmit}>
      <Email
        emailError={emailError}
        setEmailError={setEmailError}
        showEmailErrorBorder={showEmailErrorBorder}
        emailValue={emailValue}
        setEmailValue={setEmailValue}
      />
      <Password
        passwordError={passwordError}
        setPasswordError={setPasswordError}
        passwordValue={passwordValue}
        setPasswordValue={setPasswordValue}
      />

      <SignInButton disabled={disabled}>
        {isLoading ? '로딩 중...' : '로그인'}
      </SignInButton>
    </Container>
  );
}

export default SignInEmail;

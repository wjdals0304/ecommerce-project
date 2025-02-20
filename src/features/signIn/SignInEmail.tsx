import styled from 'styled-components';
import {useState} from 'react';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import {formDataEntries, postRequest, getToken} from '@/utils/apiClient';
import {setCookie} from 'nookies';
import {useRouter} from 'next/router';
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

const FindPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  gap: 5px;
`;

const FindPassword = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: #738088;
`;

const PasswordClickHere = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: #56af2c;
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
      const response = await postRequest({
        url: API_ENDPOINTS.AUTH_SIGNIN_EMAIL,
        data: dataPost,
      });
      const token = getToken(response);

      setCookie(null, 'jwt', token, {
        maxAge: 60 * 60,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });

      router.push('/');
    } catch (error) {
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
      <FindPasswordContainer>
        <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
        <PasswordClickHere>클릭하세요</PasswordClickHere>
      </FindPasswordContainer>
      <SignInButton disabled={disabled}>
        {isLoading ? '로딩 중...' : '로그인'}
      </SignInButton>
    </Container>
  );
}

export default SignInEmail;

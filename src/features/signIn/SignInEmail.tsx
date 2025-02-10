import styled from 'styled-components';
import {useState} from 'react';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import {formDataEntries, postRequest} from '@/utils/apiClient';
import Cookies from 'js-cookie';
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const data = formDataEntries(event);
    const dataPost = {
      email: data.email,
      password_hash: data.password,
    };

    try {
      const response = await postRequest(API_ENDPOINTS.SIGNIN_EMAIL, dataPost);
      const authHeader = response.headers['authorization'];
      const token = authHeader.split(' ')[1];
      Cookies.set('jwt', token, {expires: 1});
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

  const isEmailValid = emailError === '';
  const isPasswordValid = passwordError === '';
  const isFormValid = isEmailValid && isPasswordValid;
  const disabled = isLoading || !isFormValid;

  return (
    <Container onSubmit={handleSubmit}>
      <Email
        emailError={emailError}
        setEmailError={setEmailError}
        showEmailErrorBorder={showEmailErrorBorder}
      />
      <Password
        passwordError={passwordError}
        setPasswordError={setPasswordError}
      />
      <FindPasswordContainer>
        <FindPassword>Forgot your password?</FindPassword>
        <PasswordClickHere>Click Here</PasswordClickHere>
      </FindPasswordContainer>
      <SignInButton disabled={disabled}>
        {isLoading ? '로딩 중...' : '로그인'}
      </SignInButton>
    </Container>
  );
}

export default SignInEmail;

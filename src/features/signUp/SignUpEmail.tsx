import styled from 'styled-components';
import {API_ENDPOINTS} from '../../config/ApiEndPoints';
import apiClient from '@/utils/apiClient';
import FullName from './signUpInput/FullName';
import Email from './signUpInput/Email';
import PhoneNumber from './signUpInput/PhoneNumber';
import Password from './signUpInput/Password';

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
`;

const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
  const formData = new FormData(e.target as HTMLFormElement);
  const data = Object.fromEntries(formData);

  try {
    const response = await apiClient.post(API_ENDPOINTS.SIGNUP_EMAIL, {
      full_name: data.fullName,
      email: data.email,
      phone_number: data.phoneNumber,
      password_hash: data.password,
    });
    if (response.status === 200) {
      // 홈으로 이동
      console.log('Sign up successful:', response.data);
    }
  } catch (error) {
    console.error('Sign up failed:', error);
  }
};

export default function SignUpEmail() {
  return (
    <SignUpContainer onSubmit={handleSignUp}>
      <FullName />
      <Email />
      <PhoneNumber />
      <Password />
      <SignUpButton type="submit">회원가입</SignUpButton>
    </SignUpContainer>
  );
}

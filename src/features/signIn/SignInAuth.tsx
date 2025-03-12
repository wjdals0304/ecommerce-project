import styled from 'styled-components';
import googleIcon from '../../../public/images/signIn/google.svg';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {useAuthStore} from '@/store/authStore';
import {supabase} from '@/utils/supabase';
import {toast} from 'react-toastify';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7f8;
  gap: 25px;
  margin: 25px auto 0;
  width: 584px;
`;

const Or = styled.div`
  font-size: 20px;
  color: #738088;
  font-weight: medium;
  position: relative;
  margin: 0 10px;
  width: 100%;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
    width: 256px;
    height: 1px;
    background-color: #001c30;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translateY(-50%);
    width: 256px;
    height: 1px;
    background-color: #001c30;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  height: 58px;
  background-color: #f5f7f8;
  color: #fff;
  border-radius: 55px;
  border: 1px solid #001c30;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

const GoogleIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

const GoogleText = styled.span`
  font-size: 24px;
  font-weight: medium;
  color: #001c30;
`;

export default function SignInAuth() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Google sign in error:', error);
      toast.error('구글 로그인에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Or>또는</Or>
      <GoogleButton onClick={handleGoogleSignIn} disabled={isLoading}>
        <GoogleIcon src={googleIcon} alt="google" />
        <GoogleText>{isLoading ? '로그인 중...' : '구글로 로그인'}</GoogleText>
      </GoogleButton>
    </Container>
  );
}

import styled from 'styled-components';
import Search from '@/components/Search';
import SignUpEmail from './SignUpEmail';
import SignUpAuth from './SignUpAuth';
import Link from 'next/link';
import SignInAuth from '../signIn/SignInAuth';
const Container = styled.div`
  background-color: #f5f7f8;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 102px;
  padding-bottom: 43px;
`;

const AccountText = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: #001c30;
`;

const SignInButton = styled.button`
  font-size: 16px;
  font-weight: medium;
  color: #56af2c;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default function SignUp() {
  return (
    <Container>
      <Search />
      <Title>회원가입</Title>
      <SignUpEmail />
      <SignInAuth />
      <SignInContainer>
        <Link href="/signin">
          <AccountText>이미 회원이신가요?</AccountText>
          <SignInButton>로그인</SignInButton>
        </Link>
      </SignInContainer>
    </Container>
  );
}

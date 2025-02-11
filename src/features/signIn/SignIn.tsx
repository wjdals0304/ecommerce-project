import styled from 'styled-components';
import Search from '../../components/Search';
import SignInEmail from './SignInEmail';
import SignInAuth from './SignInAuth';

const Container = styled.div`
  background-color: #f5f7f8;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const SignUpContainer = styled.div`
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

const SignUpButton = styled.button`
  font-size: 16px;
  font-weight: medium;
  color: #56af2c;
  background-color: transparent;
  border: none;
`;

function SignIn() {
  return (
    <Container>
      <Search />
      <Title>로그인</Title>
      <SignInEmail />
      <SignInAuth />
      <SignUpContainer>
        <AccountText>아직 회원이 아니신가요?</AccountText>
        <SignUpButton>회원가입</SignUpButton>
      </SignUpContainer>
    </Container>
  );
}

export default SignIn;

import styled from 'styled-components';
import Image from 'next/image';
import passwordIcon from '../../../public/images/signIn/password.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7f8;
  gap: 25px;
  margin: 43px auto 0;
  width: 584px;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 58px;
  border: 1px solid #b6bbc4;
  border-radius: 55px;
  padding: 15px 25px;

  &::placeholder {
    color: #ababcb;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 58px;
  border: 1px solid #b6bbc4;
  border-radius: 55px;
  padding: 15px 25px;

  &::placeholder {
    color: #ababcb;
  }
`;

const PasswordIcon = styled(Image)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 25px;
  width: 24px;
  height: 24px;
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
`;

function SignInEmail() {
  return (
    <Container>
      <EmailInput placeholder="Email" />
      <PasswordContainer>
        <PasswordInput placeholder="Password" />
        <PasswordIcon src={passwordIcon} alt="password" />
      </PasswordContainer>

      <FindPasswordContainer>
        <FindPassword>Forgot your password?</FindPassword>
        <PasswordClickHere>Click Here</PasswordClickHere>
      </FindPasswordContainer>
      <SignInButton>Sign In</SignInButton>
    </Container>
  );
}

export default SignInEmail;

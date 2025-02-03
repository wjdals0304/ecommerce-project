import styled from 'styled-components';
import Image from 'next/image';
import passwordIcon from '../../../public/images/signIn/password.svg';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 584px;
  margin: 43px auto;
`;

const FullEmailInput = styled.input`
  width: 100%;
  height: 58px;
  border: 1px solid #b6bbc4;
  border-radius: 55px;
  padding: 15px 25px;

  &::placeholder {
    color: #ababcb;
  }
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

const PhoneNumberInput = styled.input`
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

export default function SignUpEmail() {
  return (
    <SignUpContainer>
      <FullEmailInput placeholder="FullEmail" />
      <EmailInput placeholder="Email" />
      <PhoneNumberInput placeholder="Phone Number" />
      <PasswordContainer>
        <PasswordInput placeholder="Password" />
        <PasswordIcon src={passwordIcon} alt="Password" />
      </PasswordContainer>
      <SignUpButton>Sign Up</SignUpButton>
    </SignUpContainer>
  );
}

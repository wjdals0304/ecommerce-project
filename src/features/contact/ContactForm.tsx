import styled from 'styled-components';

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TitleLine = styled.div`
  width: 200px;
  height: 2px;
  background-color: #f4ce14;
  margin-top: 25px;
`;

const Description = styled.p`
  font-size: 24px;
  margin-top: 25px;
  color: #8e96a4;
`;

const Container = styled.div`
  background-color: #f5f7f8;
  width: 100%;
`;

const InnerContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding: 50px 100px;
`;

const FormContainer = styled.form`
  margin-top: 25px;
  width: 100%;
`;

const NameEmailContainer = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
`;

const NameInput = styled.input`
  flex: 1;
  height: 49px;
  border: 1px solid #b6bbc4;
  border-radius: 25px;
  padding: 0 25px;

  &::placeholder {
    color: #8e96a4;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  height: 49px;
  border: 1px solid #b6bbc4;
  border-radius: 25px;
  padding: 0 25px;

  &::placeholder {
    color: #8e96a4;
  }
`;

const AddressPhoneContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 25px;
`;

const AddressInput = styled.input`
  flex: 1;
  height: 49px;
  border: 1px solid #b6bbc4;
  border-radius: 25px;
  padding: 0 25px;

  &::placeholder {
    color: #8e96a4;
  }
`;

const PhoneInput = styled.input`
  flex: 1;
  height: 49px;
  border: 1px solid #b6bbc4;
  border-radius: 25px;
  padding: 0 25px;

  &::placeholder {
    color: #8e96a4;
  }
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 111px;
  border: 1px solid #b6bbc4;
  border-radius: 15px;
  padding: 15px;
  margin-top: 25px;
  margin-bottom: 30px;
  resize: none;

  &::placeholder {
    color: #8e96a4;
  }
`;

function ContactForm() {
  return (
    <Container>
      <InnerContainer>
        <Title>메세지 남기기</Title>
        <TitleLine />
        <Description>
          문의하실 내용을 남겨주세요. 최대한 빠르게 답장해드리겠습니다.
        </Description>
        <FormContainer>
          <NameEmailContainer>
            <NameInput placeholder="이름" />
            <EmailInput placeholder="이메일" />
          </NameEmailContainer>
          <AddressPhoneContainer>
            <AddressInput placeholder="주소" />
            <PhoneInput placeholder="전화번호" />
          </AddressPhoneContainer>
          <MessageInput placeholder="문의하실 내용을 남겨주세요." />
        </FormContainer>
      </InnerContainer>
    </Container>
  );
}

export default ContactForm;

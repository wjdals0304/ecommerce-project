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

const FormContainer = styled.form`
  margin-top: 25px;
`;

const NameEmailContainer = styled.div`
  display: flex;
  gap: 25px;
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

const MessageInput = styled.input`
  width: 100%;
  height: 111px;
  border: 1px solid #b6bbc4;
  border-radius: 15px;
  padding: 10px;
  margin-top: 25px;
  margin-bottom: 30px;

  &::placeholder {
    color: #8e96a4;
  }
`;

const Container = styled.div`
  background-color: #f5f7f8;
  padding: 50px 100px;
`;

function ContactForm() {
  return (
    <Container>
      <Title>Leave a Message</Title>
      <TitleLine />
      <Description>
        If you have any questions please send us a message using the adjacent
        form and we will get back to you as soon as possible{' '}
      </Description>
      <FormContainer>
        <NameEmailContainer>
          <NameInput placeholder="Name" />
          <EmailInput placeholder="Email" />
        </NameEmailContainer>
        <AddressPhoneContainer>
          <AddressInput placeholder="Address" />
          <PhoneInput placeholder="Phone" />
        </AddressPhoneContainer>
      </FormContainer>
      <MessageInput placeholder="Message" />
    </Container>
  );
}

export default ContactForm;

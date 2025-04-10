import styled from 'styled-components';
import Search from '../../components/Search';
import ContactForm from './ContactForm';

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const InnerContainer = styled.div`
  background-color: hsl(200, 17.6%, 96.7%);
  width: 1240px;
  margin: 0 auto;
`;

const Container = styled.div`
  background-color: #f5f7f8;
  padding-bottom: 50px;
`;

function Contact() {
  return (
    <Container>
      <Search />
      <InnerContainer>
        <Title>문의하기</Title>
        <ContactForm />
      </InnerContainer>
    </Container>
  );
}

export default Contact;

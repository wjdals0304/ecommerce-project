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
  background-color: #f5f7f8;
  width: 1240px;
  margin: auto;
`;

const Container = styled.div`
  background-color: #f5f7f8;
`;

function Contact() {
  return (
    <Container>
      <Search />
      <InnerContainer>
        <Title>Contact Us</Title>
        <ContactForm />
      </InnerContainer>
    </Container>
  );
}

export default Contact;

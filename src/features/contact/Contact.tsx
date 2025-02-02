import styled from 'styled-components';
import Search from '../../components/Search';
import ContactForm from './ContactForm';

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const Container = styled.div`
  background-color: #f5f7f8;
`;

function Contact() {
  return (
    <Container>
      <Search />

      <Title>Contact Us</Title>
      <ContactForm />
    </Container>
  );
}

export default Contact;

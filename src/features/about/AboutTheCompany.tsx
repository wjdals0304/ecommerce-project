import styled from 'styled-components';

const Container = styled.div`
  background-color: #f5f7f8;
  border: 1px solid transparent;
  padding: 50px 100px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #001c30;
`;

const Line = styled.div`
  width: 308px;
  height: 5px;
  background-color: #f4ce14;
  margin: 20px 0;
`;

const Content = styled.p`
  font-size: 24px;
  color: #8e96a4;
  line-height: 1.5;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 574px;
  background-color: #d7d7d7;
  border-radius: 15px;
  margin: 25px 0;
`;

function AboutTheCompany() {
  return (
    <Container>
      <Title>About The Company</Title>
      <Line />
      <Content>
        Qommarket is your go-to source for top-quality computers and
        electronics. We offer a wide range of products, from powerful laptops
        and desktops to the latest smartphones and smart home devices. Our
        mission is to bring the latest technology to everyone, with competitive
        prices and outstanding customer service. Shop with us and experience the
        future of technology.{' '}
      </Content>
      <StyledDiv />
    </Container>
  );
}

export default AboutTheCompany;

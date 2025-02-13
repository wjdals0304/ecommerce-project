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
  width: 120px;
  height: 5px;
  background-color: #f4ce14;
  margin: 20px 0;
`;

const Content = styled.p`
  font-size: 24px;
  color: #8e96a4;
  line-height: 1.5;
`;

function AboutTheCompany() {
  return (
    <Container>
      <Title>회사 소개</Title>
      <Line />
      <Content>
        Qommarket은 최고의 컴퓨터와 전자 제품을 제공하는 최고의 소스입니다.
        우리는 강력한 노트북과 데스크탑부터 최신 스마트폰과 스마트 홈
        디바이스까지 다양한 제품을 제공합니다. 우리의 미션은 모든 사람에게 최신
        기술을 제공하는 것입니다. 경쟁적인 가격과 뛰어난 고객 서비스를
        제공합니다. 우리와 함께 기술의 미래를 경험해보세요.{' '}
      </Content>
    </Container>
  );
}

export default AboutTheCompany;

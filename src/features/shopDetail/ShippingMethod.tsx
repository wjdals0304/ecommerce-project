import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 15px;

  padding-bottom: 25px;
  border-bottom: 1px solid #8e96a4;
`;

const ShippingText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
`;

const ShippingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #8e96a4;
  border-radius: 25px;
  font-size: 16px;
  color: #001c30;
  background-color: #f5f7f8;
  cursor: pointer;
`;

const Option = styled.option`
  color: #001c30;
`;

const EstimationText = styled.p`
  font-size: 14px;
  color: #8e96a4;
`;

export default function ShippingMethod() {
  return (
    <Container>
      <ShippingText>배송 방법:</ShippingText>
      <ShippingContainer>
        <Select>
          <Option>일반 배송</Option>
          <Option>빠른 배송</Option>
        </Select>
        <Select>
          <Option>배송지: 서울특별시</Option>
          <Option>배송지: 경기도</Option>
          <Option>배송지: 인천광역시</Option>
        </Select>
      </ShippingContainer>
      <EstimationText>
        예상 배송 시간: 3-5일 소요 (추정 배송비: 5-10원)
      </EstimationText>
    </Container>
  );
}

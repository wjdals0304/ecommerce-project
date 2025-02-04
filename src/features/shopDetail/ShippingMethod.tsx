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
      <ShippingText>Shipping Method:</ShippingText>
      <ShippingContainer>
        <Select>
          <Option>Normal Delivery</Option>
          <Option>Express Delivery</Option>
        </Select>
        <Select>
          <Option>Deliver to: London, Britania Raya</Option>
          <Option>Deliver to: New York, USA</Option>
        </Select>
      </ShippingContainer>
      <EstimationText>
        Estimation 3-5 days delivery ($5 - $10 estimated shipping cost)
      </EstimationText>
    </Container>
  );
}

import styled from 'styled-components';
import ShoppingCheckOutTotal from './ShoppingCheckOutOrder';
const Container = styled.div`
  display: flex;
  gap: 25px;
  align-items: flex-start;
`;

const BillingContainer = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 804px;
  height: auto;
  padding: 15px;
`;

const BillingDetail = styled.span`
  font-size: 24px;
  font-weight: medium;
  color: #001c30;
  padding: 10px 0;
  border-bottom: 1px solid #8e96a4;
  display: block;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
  padding-bottom: 25px;

  border-bottom: 1px solid #8e96a4;
`;

const InputRow = styled.div`
  display: flex;
  gap: 15px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 49px;
  border: 1px solid #8e96a4;
  border-radius: 25px;
  background-color: #f5f7f8;
  padding: 15px;
`;

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const SaveButton = styled.button`
  background-color: #001c30;
  color: #fff;
  border-radius: 55px;
  padding: 15px;
  width: 161px;
  height: 58px;
  font-size: 24px;
  font-weight: medium;
`;

export default function ShoppingCheckOut() {
  return (
    <Container>
      <BillingContainer>
        <BillingDetail>Billing Details</BillingDetail>
        <InputContainer>
          <InputRow>
            <InputBox placeholder="First Name" />
            <InputBox placeholder="Last Name" />
          </InputRow>
          <InputBox placeholder="Address" />
          <InputRow>
            <InputBox placeholder="Town/City" />
            <InputBox placeholder="Postcode/ZIP" />
          </InputRow>
          <InputRow>
            <InputBox placeholder="Phone" />
            <InputBox placeholder="Email" />
          </InputRow>
        </InputContainer>
        <SaveButtonContainer>
          <SaveButton>Save</SaveButton>
        </SaveButtonContainer>
      </BillingContainer>
      <ShoppingCheckOutTotal />
    </Container>
  );
}

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
`;

const SpesificationContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const SpesificationTitle = styled.span`
  font-size: 24px;
  font-weight: medium;
  color: #8e96a4;
  width: 426px;
`;

const SpesificationContent = styled.span`
  font-size: 24px;
  font-weight: medium;
  color: #001c30;
`;

export default function DetailSpesificationTab() {
  return (
    <Container>
      <SpesificationContainer>
        <SpesificationTitle>Platform :</SpesificationTitle>
        <SpesificationContent>Notebook</SpesificationContent>
      </SpesificationContainer>
      <SpesificationContainer>
        <SpesificationTitle>Type Prosesor :</SpesificationTitle>
        <SpesificationContent>Bintel Core i3</SpesificationContent>
      </SpesificationContainer>
    </Container>
  );
}

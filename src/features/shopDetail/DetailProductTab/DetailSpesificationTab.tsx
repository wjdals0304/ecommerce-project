import styled from 'styled-components';
import {Specification} from '@/types/shop';
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

interface DetailSpesificationTabProps {
  specifications: Specification[];
}

export default function DetailSpesificationTab({
  specifications,
}: DetailSpesificationTabProps) {
  return (
    <Container>
      {specifications.map(({id, attribute, value}) => (
        <SpesificationContainer key={id}>
          <SpesificationTitle>{attribute} :</SpesificationTitle>
          <SpesificationContent>{value}</SpesificationContent>
        </SpesificationContainer>
      ))}
    </Container>
  );
}

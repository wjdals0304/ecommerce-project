import styled from 'styled-components';
import checkIcon from 'public/images/shop/check.svg';
import Image from 'next/image';
import {ProductDescription} from '@/types/shop';
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin-top: 25px;
`;

const DescriptionContainer = styled.div`
  font-size: 24px;
  font-weight: medium;
  display: flex;
  align-items: center;
  gap: 15px;
`;

interface DescriptionTabProps {
  descriptions: ProductDescription[];
}

export default function DescriptionTab({descriptions}: DescriptionTabProps) {
  return (
    <Container>
      {descriptions.map(({id, feature}) => (
        <DescriptionContainer key={id}>
          <Image src={checkIcon} alt="check" width={24} height={25} />
          {feature}
        </DescriptionContainer>
      ))}
    </Container>
  );
}

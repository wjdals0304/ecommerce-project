import styled from 'styled-components';
import checkIcon from 'public/images/shop/check.svg';
import Image from 'next/image';

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

export default function DescriptionTab() {
  return (
    <Container>
      <DescriptionContainer>
        <Image src={checkIcon} alt="check" width={24} height={25} />
        Ultra-Slim Design
      </DescriptionContainer>
      <DescriptionContainer>
        <Image src={checkIcon} alt="check" width={24} height={25} />
        High-Performance Processor
      </DescriptionContainer>
      <DescriptionContainer>
        <Image src={checkIcon} alt="check" width={24} height={25} />
        Vivid Display
      </DescriptionContainer>
    </Container>
  );
}

import styled from 'styled-components';

const Container = styled.div`
  padding: 100px;
  background-color: #f5f7f8;
  display: flex;
  gap: 50px;
`;

const OurMissionDiv = styled.div`
  flex: 1;
`;

const OurMissionTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #001c30;
`;

const OurMissionContent = styled.p`
  margin-top: 10px;
  font-size: 24px;
  color: #8e96a4;
  font-weight: medium;
  line-height: 1.5;
`;

const OurVisionTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #001c30;
  margin-top: 50px;
`;

const OurVisionContent = styled.p`
  margin-top: 10px;
  font-size: 24px;
  color: #8e96a4;
  font-weight: medium;
  line-height: 1.5;
`;

const StyledOurVisionDiv = styled.div`
  flex: 1;
  background-color: #d7d7d7;
  border-radius: 15px;
`;

function OurMission() {
  return (
    <Container>
      <OurMissionDiv>
        <OurMissionTitle>Our Mission</OurMissionTitle>
        <OurMissionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          egestas semper placerat. Aliquam dictum urna elit, vel fringilla
          ligula finibus at. Suspendisse gravida efficitur metus, non hendrerit
          nisi pretium non. Aenean commodo fringilla ex. Nunc eu massa justo.{' '}
        </OurMissionContent>
        <OurVisionTitle>Our Vision</OurVisionTitle>
        <OurVisionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          egestas semper placerat. Aliquam dictum urna elit, vel fringilla
          ligula finibus at. Suspendisse gravida efficitur metus, non hendrerit
          nisi pretium non. Aenean commodo fringilla ex. Nunc eu massa justo.
        </OurVisionContent>
      </OurMissionDiv>
      <StyledOurVisionDiv />
    </Container>
  );
}

export default OurMission;

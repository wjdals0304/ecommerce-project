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
        <OurMissionTitle>우리의 미션</OurMissionTitle>
        <OurMissionContent>
          우리의 미션은 모든 사람에게 최신 기술을 제공하는 것입니다. 경쟁적인
          가격과 뛰어난 고객 서비스를 제공합니다. 우리와 함께 기술의 미래를
          경험해보세요.
        </OurMissionContent>
        <OurVisionTitle>우리의 비전</OurVisionTitle>
        <OurVisionContent>
          우리의 비전은 모든 사람에게 최신 기술을 제공하는 것입니다. 경쟁적인
          가격과 뛰어난 고객 서비스를 제공합니다. 우리와 함께 기술의 미래를
          경험해보세요.
        </OurVisionContent>
      </OurMissionDiv>
      <StyledOurVisionDiv />
    </Container>
  );
}

export default OurMission;

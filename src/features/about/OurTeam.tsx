import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  padding: 100px;
  background-color: #f5f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #001c30;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: medium;
  color: #8e96a4;
  margin-top: 10px;
`;

const TeamMembers = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 50px;
`;

const TeamMember = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px 15px 25px;
  height: 497px;
`;

const TeamMemberImage = styled(Image)`
  background-color: #d7d7d7;
  border-radius: 8px;
`;

const TeamMemberName = styled.h4`
  margin-top: 25px;
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
`;

const TeamMemberPosition = styled.span`
  font-size: 16px;
  color: #8e96a4;
  margin-top: 5px;
`;

function OurTeam() {
  return (
    <Section>
      <Title>우리의 팀</Title>
      <SubTitle>Qommarket의 전문가 팀을 만나보세요</SubTitle>
      <TeamMembers>
        <TeamMember>
          <TeamMemberImage
            src=""
            alt="Team Member 1"
            width={350}
            height={381}
          />
          <TeamMemberName>Jung Min</TeamMemberName>
          <TeamMemberPosition>CEO</TeamMemberPosition>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage
            src=""
            alt="Team Member 2"
            width={350}
            height={381}
          />
          <TeamMemberName>Yuri</TeamMemberName>
          <TeamMemberPosition>CTO</TeamMemberPosition>
        </TeamMember>
      </TeamMembers>
    </Section>
  );
}

export default OurTeam;

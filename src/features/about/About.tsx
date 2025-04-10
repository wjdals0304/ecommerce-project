import styled from 'styled-components';
import Search from '../../components/Search';
import AboutTheCompany from './AboutTheCompany';
import OurMission from './OurMission';
import OurTeam from './OurTeam';

const Container = styled.div`
  background-color: #f5f7f8;
  border: 1px solid transparent;
`;

const InnerContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
`;

function About() {
  return (
    <Container>
      <Search />
      <InnerContainer>
        <AboutTheCompany />
        <OurMission />
        <OurTeam />
      </InnerContainer>
    </Container>
  );
}

export default About;

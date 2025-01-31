import styled from 'styled-components';
import Search from '../../components/Search';
import AboutTheCompany from './AboutTheCompany';
import OurMission from './OurMission';
import OurTeam from './OurTeam';

const Container = styled.div`
  background-color: #f5f7f8;
  border: 1px solid transparent;
`;

function About() {
  return (
    <Container>
      <Search />
      <AboutTheCompany />
      <OurMission />
      <OurTeam />
    </Container>
  );
}

export default About;

import styled from 'styled-components';

function FooterSection() {
  return (
    <>
      <div>
        <SectionTitle>Shop</SectionTitle>
        <LinkList>
          <LinkItem>
            <StyledLink href="#">Gaming</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">Computer</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">Laptop</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">Handphone</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">Accesories</StyledLink>
          </LinkItem>
        </LinkList>
      </div>
      <div>
        <SectionTitle>Services</SectionTitle>
        <LinkList>
          <LinkItem>
            <StyledLink href="#">Shop</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">Service Device</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">Training</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">Bussines</StyledLink>
          </LinkItem>
        </LinkList>
      </div>
      <div>
        <SectionTitle>Contact</SectionTitle>
        <LinkList>
          <LinkItem>
            <StyledLink href="#">+62342342234</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">admin@gmail.com</StyledLink>
          </LinkItem>
        </LinkList>
      </div>
    </>
  );
}

export default FooterSection;

const SectionTitle = styled.div`
  color: #ffffff80;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 25px;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LinkItem = styled.li`
  list-style: none;
`;

const StyledLink = styled.a`
  color: #fff;
  font-weight: lighter;
  font-size: 17px;
  text-decoration: none;

  &:hover {
    color: #ffffff80;
    transition: color 0.3s ease;
  }
`;

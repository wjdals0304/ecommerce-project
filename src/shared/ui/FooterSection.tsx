import styled from 'styled-components';

function FooterSection() {
  return (
    <>
      <div>
        <SectionTitle>Shop</SectionTitle>
        <LinkList>
          <LinkItem>
            <StyledLink href="#">게임</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">컴퓨터</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">노트북</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">휴대폰</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">액세서리</StyledLink>
          </LinkItem>
        </LinkList>
      </div>
      <div>
        <SectionTitle>Services</SectionTitle>
        <LinkList>
          <LinkItem>
            <StyledLink href="#">쇼핑몰</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">서비스 기기</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">트레이닝</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink href="#">비즈니스</StyledLink>
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

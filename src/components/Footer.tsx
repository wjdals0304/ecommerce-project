// import './footer.css';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import facebookIcon from '/public/images/home/facebook.svg';
import instagramIcon from '/public/images/home/instagram.svg';
import linkedInIcon from '/public/images/home/linkedin.svg';

const FooterContainer = styled.footer`
  background-color: #001c30;
  padding: 50px 100px;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const TitleSection = styled.div`
  max-width: 300px;
`;

const TitleHeading = styled.h1`
  color: #fff;
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
`;

const TitleText = styled.p`
  color: #fff;
  font-weight: lighter;
  font-size: 14px;
  margin-bottom: 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

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

const Divider = styled.div`
  height: 1px;
  background-color: #fff;
  margin: 50px 0;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const CopyrightLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <TitleSection>
          <TitleHeading>ECOMMERCE</TitleHeading>
          <TitleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            at congue risus. Sed commodo dapibus urna eget malesuada.
            Suspendisse sed lectus ex.
          </TitleText>
          <SocialIcons>
            <Image src={linkedInIcon} alt="linkedIn" width={24} height={24} />
            <Image src={facebookIcon} alt="facebook" width={24} height={24} />
            <Image src={instagramIcon} alt="instagram" width={24} height={24} />
          </SocialIcons>
        </TitleSection>

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
      </FooterContent>

      <Divider />

      <Copyright>
        <p>Copyright 2023. All rights reserved.</p>
        <CopyrightLink href="#">Term & Condition</CopyrightLink>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;

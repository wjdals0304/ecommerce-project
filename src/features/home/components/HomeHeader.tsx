import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import leftIcon from 'public/images/home/leftIcon.svg';
import rightIcon from 'public/images/home/rightIcon.svg';
import { EventBanners } from '@/types/home';
import { useState } from 'react';
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 437px;
  gap: 25px;
  margin: 50px 0;
  width: 100%;
`;

const Carousel = styled.div`
  flex: 3;
  background-color: #d3d3d3;
  border-radius: 15px;
  position: relative;
  height: 100%;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ebebeb;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LeftButton = styled(CarouselButton)`
  left: 15px;
`;

const RightButton = styled(CarouselButton)`
  right: 15px;
`;

const RightCardContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

const Card = styled(Image)`
  background-color: #d3d3d3;
  border-radius: 15px;
  flex: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

interface HomeHeaderProps {
  eventBanners: EventBanners;
}

function HomeHeader({ eventBanners }: HomeHeaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { largeBanners } = eventBanners;

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === eventBanners.largeBanners.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? eventBanners.largeBanners.length - 1 : prevIndex - 1,
    );
  };

  return (
    <HeaderContainer>
      <Carousel>
        <LeftButton onClick={handlePrev}>
          <Image src={leftIcon} alt="left" width={26} height={26} />
        </LeftButton>
        <Card
          src={largeBanners[currentIndex].imageurl}
          alt={largeBanners[currentIndex].imageurl}
          width={732}
          height={437}
        />
        <RightButton onClick={handleNext}>
          <Image src={rightIcon} alt="right" width={26} height={26} />
        </RightButton>
      </Carousel>
      <RightCardContainer>
        {eventBanners.smallBanners.map(banner => (
          <Card
            key={banner.id}
            src={banner.imageurl}
            alt={'이벤트 배너 이미지'}
            width={483}
            height={206}
          />
        ))}
      </RightCardContainer>
    </HeaderContainer>
  );
}

export default HomeHeader;

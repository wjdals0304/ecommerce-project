import styled from 'styled-components';
import gameIcon from 'public/images/home/game.svg';
import smartphoneIcon from 'public/images/home/smartphone.svg';
import laptopIcon from 'public/images/home/laptop.svg';
import tvIcon from 'public/images/home/tv.svg';
import cameraIcon from 'public/images/home/camera.svg';
import moreIcon from 'public/images/home/more.svg';
import Image from 'next/image';

const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 100px 0;
  gap: 25px;
`;

const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 35px 45px;
  width: 185px;
  height: 169px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CategoryTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

function HomeCategory() {
  return (
    <CategoryList>
      <CategoryItem>
        <Image src={gameIcon} alt="Gaming" width={94} height={70} />
        <CategoryTitle>Gaming</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <Image src={smartphoneIcon} alt="Smartphone" width={70} height={70} />
        <CategoryTitle>Smartphone</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <Image src={laptopIcon} alt="Laptop" width={87} height={70} />
        <CategoryTitle>Laptop</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <Image src={tvIcon} alt="TV" width={90} height={68} />
        <CategoryTitle>TV</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <Image src={cameraIcon} alt="Camera" width={88} height={68} />
        <CategoryTitle>Camera</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <Image src={moreIcon} alt="More" width={68} height={68} />
        <CategoryTitle>More</CategoryTitle>
      </CategoryItem>
    </CategoryList>
  );
}

export default HomeCategory;

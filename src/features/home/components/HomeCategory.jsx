import React from 'react';
import gameIcon from 'public/images/home/game.svg';
import smartphoneIcon from 'public/images/home/smartphone.svg';
import laptopIcon from 'public/images/home/laptop.svg';
import tvIcon from 'public/images/home/tv.svg';
import cameraIcon from 'public/images/home/camera.svg';
import moreIcon from 'public/images/home/more.svg';
import Image from 'next/image';
function HomeCategory() {
  return (
    <ul className="categories">
      <li className="category-item">
        <Image src={gameIcon} alt="Gaming" width={94} height={70} />
        <span className="category-title">Gaming</span>
      </li>
      <li className="category-item">
        <Image src={smartphoneIcon} alt="Smartphone" width={70} height={70} />
        <span className="category-title">Smartphone</span>
      </li>
      <li className="category-item">
        <Image src={laptopIcon} alt="Laptop" width={87} height={70} />
        <span className="category-title">Laptop</span>
      </li>
      <li className="category-item">
        <Image src={tvIcon} alt="TV" width={90} height={68} />
        <span className="category-title">TV</span>
      </li>
      <li className="category-item">
        <Image src={cameraIcon} alt="Camera" width={88} height={68} />
        <span className="category-title">Camera</span>
      </li>
      <li className="category-item">
        <Image src={moreIcon} alt="More" width={68} height={68} />
        <span className="category-title">More</span>
      </li>
    </ul>
  );
}

export default HomeCategory;

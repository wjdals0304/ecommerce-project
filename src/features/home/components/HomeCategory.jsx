import React from 'react';
import './homeCategory.css';
import gameIcon from '../../../static/home/game.svg';
import smartphoneIcon from '../../../static/home/smartphone.svg';
import laptopIcon from '../../../static/home/laptop.svg';
import tvIcon from '../../../static/home/tv.svg';
import cameraIcon from '../../../static/home/camera.svg';
import moreIcon from '../../../static/home/more.svg';

function HomeCategory() {
  return (
    <ul className="categories">
      <li className="category-item">
        <img src={gameIcon} alt="Gaming" width="94px" height="70px"></img>
        <span className="category-title">Gaming</span>
      </li>
      <li className="category-item">
        <img
          src={smartphoneIcon}
          alt="Smartphone"
          width="70px"
          height="70px"
        ></img>
        <span className="category-title">Smartphone</span>
      </li>
      <li className="category-item">
        <img src={laptopIcon} alt="Laptop" width="87px" height="70px"></img>
        <span className="category-title">Laptop</span>
      </li>
      <li className="category-item">
        <img src={tvIcon} alt="TV" width="90px" height="68px"></img>
        <span className="category-title">TV</span>
      </li>
      <li className="category-item">
        <img src={cameraIcon} alt="Camera" width="88px" height="68px"></img>
        <span className="category-title">Camera</span>
      </li>
      <li className="category-item">
        <img src={moreIcon} alt="More" width="68px" height="68px"></img>
        <span className="category-title">More</span>
      </li>
    </ul>
  );
}

export default HomeCategory;

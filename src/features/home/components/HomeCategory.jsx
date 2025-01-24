import React from 'react';
import './homeCategory.css';
import gaming from '../../../static/home/game.svg';
import smartphone from '../../../static/home/smartphone.svg';
import laptop from '../../../static/home/laptop.svg';
import tv from '../../../static/home/tv.svg';
import camera from '../../../static/home/camera.svg';
import more from '../../../static/home/more.svg';

function HomeCategory() {
  return (
    <ul className="categories">
      <li className="category-item">
        <img src={gaming} alt="Gaming"></img>
        <span className="category-title">Gaming</span>
      </li>
      <li className="category-item">
        <img src={smartphone} alt="Smartphone"></img>
        <span className="category-title">Smartphone</span>
      </li>
      <li className="category-item">
        <img src={laptop} alt="Laptop"></img>
        <span className="category-title">Laptop</span>
      </li>
      <li className="category-item">
        <img src={tv} alt="TV"></img>
        <span className="category-title">TV</span>
      </li>
      <li className="category-item">
        <img src={camera} alt="Camera"></img>
        <span className="category-title">Camera</span>
      </li>
      <li className="category-item">
        <img src={more} alt="More"></img>
        <span className="category-title">More</span>
      </li>
    </ul>
  );
}

export default HomeCategory;

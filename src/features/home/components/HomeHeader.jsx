import React from 'react';
import './homeHeader.css';
import leftIcon from '../../../static/home/leftIcon.svg';
import rightIcon from '../../../static/home/rightIcon.svg';

function HomeHeader() {
  return (
    <div className="header-container">
      <div className="carousel">
        <button class="left">
          <img src={leftIcon} alt="left" width="26px" height="26px" />
        </button>
        <button class="right">
          <img src={rightIcon} alt="right" width="26px" height="26px" />
        </button>
      </div>
      <div className="right-card">
        <image className="card" src="" />
        <image className="card" src="" />
      </div>
    </div>
  );
}

export default HomeHeader;

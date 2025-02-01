import React from 'react';
import Image from 'next/image';
import leftIcon from 'public/images/home/leftIcon.svg';
import rightIcon from 'public/images/home/rightIcon.svg';

function HomeHeader() {
  return (
    <div className="header-container">
      <div className="carousel">
        <button className="left">
          <Image src={leftIcon} alt="left" width={26} height={26} />
        </button>
        <button className="right">
          <Image src={rightIcon} alt="right" width={26} height={26} />
        </button>
      </div>
      <div className="right-card">
        <Image className="card" src="" alt="" />
        <Image className="card" src="" alt="" />
      </div>
    </div>
  );
}

export default HomeHeader;

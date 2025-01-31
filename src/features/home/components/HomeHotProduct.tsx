import React from 'react';
import rightIcon from 'public/images/home/rightIcon.svg';
import starIcon from 'public/images/home/star.svg';
import heartDarkIcon from 'public/images/home/heartDark.svg';
import Image from 'next/image';
function HomeHotProduct() {
  return (
    <div className="home-hot-product-container">
      <div className="home-hot-product-header">
        <h2 className="home-hot-product-title">Hot News Electronics</h2>
        <a href="#" className="view-all">
          View All <Image src={rightIcon} alt="rightIcon" />
        </a>
      </div>
      <div className="home-hot-product-content">
        <div className="home-hot-product-item">
          <div className="home-hot-product-item-image-container">
            <Image
              src=""
              alt=""
              className="home-hot-product-item-image"
              width="250"
              height="250"
            />
            <div className="home-hot-product-item-rating">
              <Image
                src={starIcon}
                alt="star"
                className="home-hot-product-item-star"
              />
              <span className="home-hot-product-item-rating-value">5.0</span>
            </div>
            <div className="home-hot-product-item-heart">
              <Image src={heartDarkIcon} alt="heart" />
            </div>
          </div>

          <div className="home-hot-product-item-content">
            <span className="home-hot-product-item-title">
              Headset T50RP MK3N - Black And Red
            </span>
            <span className="home-hot-product-item-sold">200 Item sold</span>
            <div className="home-hot-product-buy">
              <span className="home-hot-product-buy-price">$100</span>
              <button className="home-hot-product-buy-btn">Buy</button>
            </div>
          </div>
        </div>
        <div className="home-hot-product-item">
          <div className="home-hot-product-item-image-container">
            <Image
              src=""
              alt=""
              className="home-hot-product-item-image"
              width="250"
              height="250"
            />
            <div className="home-hot-product-item-rating">
              <Image
                src={starIcon}
                alt="star"
                className="home-hot-product-item-star"
              />
              <span className="home-hot-product-item-rating-value">5.0</span>
            </div>
            <div className="home-hot-product-item-heart">
              <Image src={heartDarkIcon} alt="heart" />
            </div>
          </div>

          <div className="home-hot-product-item-content">
            <span className="home-hot-product-item-title">
              Headset T50RP MK3N - Black And Red
            </span>
            <span className="home-hot-product-item-sold">200 Item sold</span>
            <div className="home-hot-product-buy">
              <span className="home-hot-product-buy-price">$100</span>
              <button className="home-hot-product-buy-btn">Buy</button>
            </div>
          </div>
        </div>
        <div className="home-hot-product-item">
          <div className="home-hot-product-item-image-container">
            <Image
              src=""
              alt=""
              className="home-hot-product-item-image"
              width="250"
              height="250"
            />
            <div className="home-hot-product-item-rating">
              <Image
                src={starIcon}
                alt="star"
                className="home-hot-product-item-star"
              />
              <span className="home-hot-product-item-rating-value">5.0</span>
            </div>
            <div className="home-hot-product-item-heart">
              <Image src={heartDarkIcon} alt="heart" />
            </div>
          </div>

          <div className="home-hot-product-item-content">
            <span className="home-hot-product-item-title">
              Headset T50RP MK3N - Black And Red
            </span>
            <span className="home-hot-product-item-sold">200 Item sold</span>
            <div className="home-hot-product-buy">
              <span className="home-hot-product-buy-price">$100</span>
              <button className="home-hot-product-buy-btn">Buy</button>
            </div>
          </div>
        </div>
        <div className="home-hot-product-item">
          <div className="home-hot-product-item-image-container">
            <Image
              src=""
              alt=""
              className="home-hot-product-item-image"
              width="250"
              height="250"
            />
            <div className="home-hot-product-item-rating">
              <Image
                src={starIcon}
                alt="star"
                className="home-hot-product-item-star"
              />
              <span className="home-hot-product-item-rating-value">5.0</span>
            </div>
            <div className="home-hot-product-item-heart">
              <Image src={heartDarkIcon} alt="heart" />
            </div>
          </div>

          <div className="home-hot-product-item-content">
            <span className="home-hot-product-item-title">
              Headset T50RP MK3N - Black And Red
            </span>
            <span className="home-hot-product-item-sold">200 Item sold</span>
            <div className="home-hot-product-buy">
              <span className="home-hot-product-buy-price">$100</span>
              <button className="home-hot-product-buy-btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHotProduct;

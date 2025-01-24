import './homeHotProduct.css';
import React from 'react';
import arrow from '../../../static/home/rightIcon.svg';
import star from '../../../static/home/star.svg';
import heart from '../../../static/home/heart.svg';

function HomeHotProduct() {
  return (
    <div className="home-hot-product-container">
      <div className="home-hot-product-header">
        <h2 className="home-hot-product-title">Hot News Electronics</h2>
        <a href="#" className="view-all">
          View All <img src={arrow} alt="arrow" />
        </a>
      </div>
      <div className="home-hot-product-content">
        <div className="home-hot-product-item">
          <div className="home-hot-product-item-image-container">
            <img
              src=""
              alt=""
              className="home-hot-product-item-image"
              width="250"
              height="250"
            />
            <div className="home-hot-product-item-rating">
              <img
                src={star}
                alt="star"
                className="home-hot-product-item-star"
              />
              <span className="home-hot-product-item-rating-value">5.0</span>
            </div>
            <div className="home-hot-product-item-heart">
              <img src={heart} alt="heart" />
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
            <img
              src=""
              alt=""
              className="home-hot-product-item-image"
              width="250"
              height="250"
            />
            <div className="home-hot-product-item-rating">
              <img
                src={star}
                alt="star"
                className="home-hot-product-item-star"
              />
              <span className="home-hot-product-item-rating-value">5.0</span>
            </div>
            <div className="home-hot-product-item-heart">
              <img src={heart} alt="heart" />
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
            <img
              src=""
              alt=""
              className="home-hot-product-item-image"
              width="250"
              height="250"
            />
            <div className="home-hot-product-item-rating">
              <img
                src={star}
                alt="star"
                className="home-hot-product-item-star"
              />
              <span className="home-hot-product-item-rating-value">5.0</span>
            </div>
            <div className="home-hot-product-item-heart">
              <img src={heart} alt="heart" />
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
            <img
              src=""
              alt=""
              className="home-hot-product-item-image"
              width="250"
              height="250"
            />
            <div className="home-hot-product-item-rating">
              <img
                src={star}
                alt="star"
                className="home-hot-product-item-star"
              />
              <span className="home-hot-product-item-rating-value">5.0</span>
            </div>
            <div className="home-hot-product-item-heart">
              <img src={heart} alt="heart" />
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

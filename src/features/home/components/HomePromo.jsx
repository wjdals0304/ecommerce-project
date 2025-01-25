import React from 'react';
import './homePromo.css';
import bagIcon from '../../../static/home/bag.svg';
import heartIcon from '../../../static/home/heart.svg';
import rightIcon from '../../../static/home/rightIcon.svg';

function HomeProme() {
  return (
    <section className="container">
      <div className="header">
        <div className="sale-group">
          <h1 className="sale-group-title">Flash Sale Deals</h1>
          <div className="timer">05:02:00</div>
        </div>
        <a href="#" className="view-all">
          View All <img src={rightIcon} alt="rightIcon" />
        </a>
      </div>
      <div className="products">
        <div className="product">
          <div className="product-image">
            <img src="/path/to/headset-image.jpg" alt="Headset T50RP MK3N" />
          </div>
          <div className="product-info">
            <h2>Headset T50RP MK3N</h2>
            <div className="price-container">
              <span className="original-price">$150</span>
              <span className="sale-price">$100</span>
            </div>
            <div className="availability">
              Available: <span className="available">25</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill">
                  <span className="items-sold">25 items sold</span>
                </div>
              </div>
            </div>
            <div className="button-group">
              <button className="add-to-cart">
                <img src={bagIcon} alt="bag" width="16px" height="16px" />
                Add to Cart
              </button>
              <button className="wishlist">
                <img src={heartIcon} alt="heart" width="16px" height="16px" />
              </button>
            </div>
          </div>
        </div>
        <div className="product">{/* 두 번째 제품 */}</div>
        <div className="product">{/* 세 번째 제품 */}</div>
      </div>
    </section>
  );
}

export default HomeProme;

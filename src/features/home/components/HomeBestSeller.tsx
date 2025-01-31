import React from 'react';
import Image from 'next/image';
import rightIcon from 'public/images/home/rightIcon.svg';
import arrowIcon from 'public/images/home/arrow.svg';

function HomeBestSeller() {
  return (
    <section className="best-seller">
      <div className="best-seller-title">
        <h2 className="best-seller-title-text">Best Seller by Category</h2>
        <a href="#" className="view-all">
          View All <Image src={rightIcon} alt="rightIcon" />
        </a>
      </div>
      <div className="best-seller-products">
        <div className="best-seller-left">
          <div className="best-seller-product">
            <Image
              className="best-seller-product-image"
              src=""
              alt=""
              width="118"
              height="118"
            />
            <div className="best-seller-product-content">
              <span className="product-category">LAPTOP, NOTEBOOK</span>
              <span className="product-title">AND MORE</span>
              <a href="#" className="shop-now-btn">
                Shop Now
                <Image src={arrowIcon} alt="arrow" />
              </a>
            </div>
          </div>
          <div className="best-seller-product">
            <Image
              className="best-seller-product-image"
              src=""
              alt=""
              width="118"
              height="118"
            />
            <div className="best-seller-product-content">
              <span className="product-category">LAPTOP, NOTEBOOK</span>
              <span className="product-title">AND MORE</span>
              <a href="#" className="shop-now-btn">
                Shop Now
                <Image src={arrowIcon} alt="arrow" />
              </a>
            </div>
          </div>
          <div className="best-seller-product">
            <Image
              className="best-seller-product-image"
              src=""
              alt=""
              width="118"
              height="118"
            />
            <div className="best-seller-product-content">
              <span className="product-category">LAPTOP, NOTEBOOK</span>
              <span className="product-title">AND MORE</span>
              <a href="#" className="shop-now-btn">
                Shop Now
                <Image src={arrowIcon} alt="arrow" />
              </a>
            </div>
          </div>
          <div className="best-seller-product">
            <Image
              className="best-seller-product-image"
              src=""
              alt=""
              width="118"
              height="118"
            />
            <div className="best-seller-product-content">
              <span className="product-category">LAPTOP, NOTEBOOK</span>
              <span className="product-title">AND MORE</span>
              <a href="#" className="shop-now-btn">
                Shop Now
                <Image src={arrowIcon} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
        <div className="best-seller-new-product">
          <span className="new-arrival-tag">New Arrivals</span>
          <h3 className="new-product-title">
            <span className="title-line">Make Your Life</span>
            <span className="title-line">Easier & Stylish</span>
          </h3>
          <a href="#" className="buy-now-btn">
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeBestSeller;

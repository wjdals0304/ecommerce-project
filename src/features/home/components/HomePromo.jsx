import React from "react";
import "./homePromo.css";

function HomeProme() {
    return ( 
        <section className="container">
            <div className="header">
                <div className="sale-group">
                    <h1>Flash Sale Deals</h1>
                    <div className="timer">05:02:00</div>
                </div>
                <a href="#" className="view-all">View All</a>
            </div>
            <div className="products"> 
                <div className="product">
                    <img className="image-placeholder"></img>
                    <h2>Headset T50OR</h2>
                    <p><span class="original-price">$150</span> - <span class="sale-price">$100</span></p>
                    <p>Available: <span class="available">25</span></p>
                    <div class="progress"> 
                        <div class="progress-bar" ></div>
                    </div>
                    <p className="items-sold">25 items sold</p>
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="wishlist">;;</button>
                </div>
                <div className="product">

                </div>
                <div className="product">

                </div>
            </div>
        </section>
    )
}

export default HomeProme;
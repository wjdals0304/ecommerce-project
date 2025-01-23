import React from "react";
import "./homeHeader.css";

function HomeHeader() {
    return (
        <div className="header-container"> 
            <div className="carousel">
                <button class="left">‹</button>
                <button class="right">›</button>
                <image src="" /> 
            </div>
            <div className="right-card">
                <image className="card" src="" /> 
                <image className="card" src="" /> 
            </div>
        </div>
    )
}

export default HomeHeader;
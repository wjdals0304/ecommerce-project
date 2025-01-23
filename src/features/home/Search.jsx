import React from "react";
import "./search.css";

function Search() {
    return (
        <div className="search-container"> 
               <span>ECOMMERCE</span>
            <form class="search-bar">
                <input placeholder="Search..."/> 
                <button class="search-button">Search</button>
            </form>
        </div>
    )
}

export default Search;
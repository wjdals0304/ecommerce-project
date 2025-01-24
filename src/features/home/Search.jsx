import React from 'react';
import './search.css';
import search from '../../static/home/search.svg';
function Search() {
  return (
    <div className="search-container">
      <span className="search-title">ECOMMERCE</span>
      <form className="search-bar">
        <input placeholder="Search..." />
        <button className="search-button">
          <img src={search} alt="search" />
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;

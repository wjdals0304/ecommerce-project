import React from 'react';
import search from 'public/images/home/search.svg';
import Image from 'next/image';

function Search() {
  return (
    <div className="search-container">
      <span className="search-title">ECOMMERCE</span>
      <form className="search-bar">
        <input placeholder="Search..." />
        <button className="search-button">
          <Image src={search} alt="search" />
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;

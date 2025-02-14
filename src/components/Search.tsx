import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import search from 'public/images/home/search.svg';

const SearchContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

const SearchInner = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  max-width: 1240px;
  margin: auto;
  padding: 20px 0;
`;

const SearchTitle = styled.span`
  flex: none;
  font-weight: bold;
  font-size: 18px;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  font-style: italic;
  padding: 8px 14px;
`;

const SearchForm = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 25px;
  height: 48px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: 2px solid #e0e0e0;
  border-radius: 24px;
  padding: 0 20px;
  font-size: 16px;
  outline: none;
  height: 100%;
`;

const SearchButton = styled.button`
  flex: none;
  height: 100%;
  padding: 0 25px;
  background-color: #0f172a;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

function Search() {
  return (
    <SearchContainer>
      <SearchInner>
        <SearchTitle>이커머스</SearchTitle>
        <SearchForm>
          <SearchInput placeholder="검색어를 입력해주세요." />
          <SearchButton>
            <Image src={search} alt="search" />
            검색
          </SearchButton>
        </SearchForm>
      </SearchInner>
    </SearchContainer>
  );
}

export default Search;

import { API_ENDPOINTS } from '@/config/apiEndPoints';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import search from 'public/images/home/search.svg';
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

const SearchInner = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  width: 1240px;
  margin: auto;
  padding: 20px 0;
`;

const SearchTitle = styled(Link)`
  flex: none;
  font-weight: bold;
  font-size: 24px;
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

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #0a142f;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

function Search() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const keywordTrim = keyword.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (keywordTrim === '') {
      return;
    }
    router.push({
      pathname: API_ENDPOINTS.SEARCH,
      query: { keyword: keywordTrim },
    });
  };

  return (
    <SearchContainer>
      <SearchInner>
        <SearchTitle href={API_ENDPOINTS.ROOT}>이커머스</SearchTitle>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder="검색어를 입력해주세요."
          />
          <SearchButton type="submit">
            <Image src={search} alt="search" />
            검색
          </SearchButton>
        </SearchForm>
      </SearchInner>
    </SearchContainer>
  );
}

export default Search;

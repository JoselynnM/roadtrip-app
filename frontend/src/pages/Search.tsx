// components/CarSearch.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 300px;
`;

const SearchButton = styled.button`n
  padding: 10px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

interface Search {
  onSearch: (query: string) => void;
}

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <SearchContainer>
      <h2>Buscar Autos</h2>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Ingrese modelo, marca, etc."
      />
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
    </SearchContainer>
  );
};

export default Search;

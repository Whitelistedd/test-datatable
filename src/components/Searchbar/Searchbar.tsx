import styled from 'styled-components';
import React from 'react';

import { SearchIcon } from '../../assets/icons/search';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { ChangeSearchTerm } from '../../redux/Slices/DataTableSlice';

export const Searchbar: React.FC = React.memo(() => {
  const { searchTerm } = useAppSelector((state) => state.DataTable);
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(ChangeSearchTerm(value));
  };

  return (
    <Container>
      <SearchInput
        onChange={(event) => handleSearch(event)}
        value={searchTerm}
        placeholder="Поиск"
      />
      <SearchIcon />
    </Container>
  );
});

Searchbar.displayName = 'Searchbar';

const SearchInput = styled.input`
  background: none;
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  &::placeholder {
    font-size: 1.1em;
    color: #b2b7bf;
  }
`;

const Container = styled.div`
  max-width: 631px;
  width: 100%;
  padding: 0.7em 1.65em;
  background: #5a5c66;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
`;

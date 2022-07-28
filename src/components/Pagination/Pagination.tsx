import ReactPaginate from 'react-paginate';
import React from 'react';
import styled from 'styled-components';
import { PaginationProps } from './Pagination.model';

export const Pagination: React.FC<PaginationProps> = ({ pageCount, handlePageClick }) => {
  return (
    <Container>
      <StyledPagination
        breakLabel=""
        nextLabel="Далее"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={0}
        pageCount={pageCount}
        previousLabel="Назад"
      />
    </Container>
  );
};

const StyledPagination = styled(ReactPaginate)<{ pageCount: number }>`
  display: flex;
  list-style: none;
  font-weight: 700;
  font-family: 'Roboto';
  align-items: center;
  margin: 0px;
  padding: 0px;
  justify-content: flex-start;

  .selected {
    color: #7ebc3c;
  }

  .previous {
    margin-right: auto;
    font-size: 1.5em;
    font-style: normal;
  }
  .next {
    margin-left: auto;
    font-size: 1.5em;
    font-style: normal;
  }

  li {
    font-style: italic;
    padding: 0em 1em;
    font-size: 1.1em;
    transition: 300ms ease;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

const Container = styled.div`
  color: #474955;
`;

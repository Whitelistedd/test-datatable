import styled from 'styled-components';
import React, { useEffect, useMemo, useState } from 'react';

import { Searchbar } from '../Searchbar/Searchbar';
import { DataTable } from '../DataTable/DataTable';
import { Pagination } from '../Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { fetchTableData } from '../../redux/Slices/DataTableSlice';
import { dataType } from '../DataTable/DataTable.model';
import { handlePageClickType } from '../Pagination/Pagination.model';

const itemsPerPage = 10;

export const Home: React.FC = () => {
  const { filteredData } = useAppSelector((state) => state.DataTable);
  const [currentItems, setCurrentItems] = useState<Array<dataType>>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const dispatch = useAppDispatch();

  useMemo(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
  }, [itemOffset, filteredData]);

  useEffect(() => {
    dispatch(fetchTableData());
  }, []);

  const handlePageClick: handlePageClickType = (event) => {
    const newOffset = (event.selected * 10) % filteredData?.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <Searchbar />
      <DataTable data={currentItems} />
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1077px;
  width: 90%;
  height: 90%;
  display: flex;
  padding: 1em;
  gap: 1em;
  flex-direction: column;

  @media only screen and (max-width: 1200px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 10px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 8px;
  }

  @media only screen and (max-width: 380px) {
    font-size: 7px;
  }
`;

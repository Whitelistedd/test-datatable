import styled from 'styled-components';
import React from 'react';

import { TableHeadRow } from './TableHeadRow/TableHeadRow';
import { TableHeadData } from '../../constants';
import { TableBodyRow } from './TableBodyRow/TableBodyRow';
import { DataTableProps } from './DataTable.model';
import { useAppDispatch } from '../../redux/store/store';
import { SortData } from '../../redux/Slices/DataTableSlice';

export const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const handleSort = (name: TableHeadData) => {
    dispatch(SortData(name));
  };

  return (
    <Container>
      <TableHead>
        {TableHeadData.map((tablehead, index) => (
          <TableHeadRow
            handleSort={handleSort}
            key={`tablehead-number-${index}`}
            name={tablehead}
          />
        ))}
      </TableHead>
      <TableBody>
        {data?.map((data, index) => (
          <TableBodyRow tableBodyRowData={data} key={`tablebodyrow-number-${index}`} />
        ))}
      </TableBody>
    </Container>
  );
};

const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  color: #474955;
  tr,
  td {
    border-right: 1px solid #e3e6ec;
    border-left: 1px solid #e3e6ec;
    border-bottom: 1px solid #e3e6ec;
  }
`;

const TableHead = styled.thead`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.table`
  background: white;
  min-height: 100%;
  width: 100%;
  color: white;
  display: flex;
  font-family: 'Roboto';
  flex-direction: column;
  border-collapse: collapse;
`;

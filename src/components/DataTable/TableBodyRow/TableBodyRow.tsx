import styled from 'styled-components';
import React from 'react';

import { TableBodyRowProps } from '../DataTable.model';

export const TableBodyRow: React.FC<TableBodyRowProps> = ({ tableBodyRowData }) => {
  return (
    <Container>
      <Id>{tableBodyRowData.id}</Id>
      <Title>{tableBodyRowData.title}</Title>
      <Body>{tableBodyRowData.body}</Body>
    </Container>
  );
};

const Body = styled.td`
  flex: 5;
  font-weight: 600;
  min-height: 100%;
  padding: 1em;
  font-size: 0.85em;
  display: flex;
  align-items: center;
`;

const Title = styled(Body)`
  flex: 6.2;
`;

const Id = styled(Body)`
  flex: 1;
  justify-content: center;
`;

const Container = styled.tr`
  width: 100%;
  height: 100%;
  height: 54px;
  display: flex;
  flex: 1;
`;

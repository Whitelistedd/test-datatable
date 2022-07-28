import styled from 'styled-components';
import React from 'react';

import { TableHeadProps } from '../DataTable.model';
import { TableHeadData } from '../../../constants';
import { ArrowIcon } from '../../../assets/icons/arrow';
import { useAppSelector } from '../../../redux/store/store';

export const TableHeadRow: React.FC<TableHeadProps> = ({ name, handleSort }) => {
  const { Sort } = useAppSelector((state) => state.DataTable);

  return (
    <Container name={name} onClick={() => handleSort(name)}>
      <Name>{name.ru}</Name>
      <StyledArrowIcon sortType={Sort[name.en]} />
    </Container>
  );
};

const StyledArrowIcon = styled(ArrowIcon)<{ sortType: string }>`
  visibility: ${(props) => (props.sortType !== 'none' ? 'visible' : 'hidden')};
`;

const Name = styled.td`
  font-size: 0.9em;
`;

const Container = styled.tr<{ name: TableHeadData }>`
  background: #474955;
  width: 100%;
  padding: 1em;
  height: 54px;
  gap: 32px;
  display: flex;
  justify-content: ${(props) => (props.name.en === 'id' ? 'flex-start' : 'center')};
  align-items: center;
  flex: ${(props) => (props.name.en === 'id' ? 1 : 5)};
`;

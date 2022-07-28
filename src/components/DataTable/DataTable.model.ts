import { TableHeadData } from '../../constants';

export type dataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface TableHeadProps {
  name: TableHeadData;
  index: number;
  handleSort: (type: TableHeadData) => void;
}

export interface DataTableProps {
  data: Array<dataType>;
}

export interface TableBodyRowProps {
  tableBodyRowData: dataType;
}

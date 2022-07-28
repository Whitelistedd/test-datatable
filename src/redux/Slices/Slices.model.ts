import { dataType } from '../../components/DataTable/DataTable.model';

export interface DataTableStateType {
  TableData: Array<dataType>;
  filteredData: Array<dataType>;
  Sort: {
    [key: string]: string;
  };
  Error: string;
  searchTerm: string;
}

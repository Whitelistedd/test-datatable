import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { dataType } from '../../components/DataTable/DataTable.model';
import { TableHeadData } from '../../constants';
import axios from 'axios';
import { DataTableStateType } from './Slices.model';

const initialState: DataTableStateType = {
  TableData: [{ userId: 0, id: 0, title: '', body: '' }],
  filteredData: [],
  Sort: {
    id: 'none',
    title: 'none',
    body: 'none'
  },
  Error: '',
  searchTerm: ''
};

export const fetchTableData = createAsyncThunk('DataTable/fetchTableData', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data as dataType[];
});

export const DataTableState = createSlice({
  name: 'DataTable',
  initialState,
  reducers: {
    ChangeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredData = state.TableData.filter((data) =>
        data.id.toString() == action.payload
          ? true
          : data.title.includes(action.payload)
          ? true
          : data.body.includes(action.payload)
      );
    },
    addTableData: (state, action: PayloadAction<dataType[]>) => {
      state.TableData = action.payload;
      state.filteredData = action.payload;
    },
    SortData: (state, action: PayloadAction<TableHeadData>) => {
      const en = action.payload.en as keyof dataType;
      const sorted = [...state.filteredData];

      if (state.Sort[en] === 'none') {
        state.Sort[en] = 'ASC';
        sorted.sort((a, b) => {
          if (en !== 'id' && a[en] > b[en]) {
            return 1;
          } else if (en !== 'id' && a[en] < b[en]) {
            return -1;
          } else if (en === 'id' && a[en] < b[en]) {
            console.log('1');
            return -1;
          } else {
            return 1;
          }
        });
        state.filteredData = sorted;
      } else if (state.Sort[en] === 'ASC') {
        state.Sort[en] = 'DESC';
        sorted.sort((a, b) => {
          if (en !== 'id' && a[en] > b[en]) {
            return -1;
          } else if (en !== 'id' && a[en] < b[en]) {
            return 1;
          } else if (en === 'id' && a[en] > b[en]) {
            console.log('2');
            return -1;
          } else {
            return 1;
          }
        });
        state.filteredData = sorted;
      } else if (state.Sort[en] === 'DESC') {
        state.Sort[en] = 'none';
        state.filteredData = state.TableData;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTableData.fulfilled, (state, action) => {
      state.TableData = action.payload;
      state.filteredData = action.payload;
      state.Error = '';
    });
    builder.addCase(fetchTableData.rejected, (state) => {
      state.Error = 'что-то произошло не так';
    });
    builder.addCase(fetchTableData.pending, (state) => {
      state.Error = '';
    });
  }
});

export const { ChangeSearchTerm, addTableData, SortData } = DataTableState.actions;

export default DataTableState.reducer;

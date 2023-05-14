import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../App/api';

const initialState: State = {
  tableData: [],

  error: undefined,
};

export const getTableDate = createAsyncThunk('tables/getTableDate', (option: string) =>
  api.getTableDates(option)
);

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    replay: (state, action) => {
      state.tableData = action.payload;
    },
    addNewTableData: (state, action) => {
      state.tableData.unshift(action.payload);
    },
    sortTableDates: (state, action) => {
      state.tableData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTableDate.fulfilled, (state, action) => {
        state.tableData = action.payload;
      })
      .addCase(getTableDate.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addNewTableData, sortTableDates, replay } = tablesSlice.actions;

export default tablesSlice.reducer;

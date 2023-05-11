import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../App/api';

const initialState: State = {
  tableData: [],

  error: undefined,
};

export const getTableDates = createAsyncThunk('tables/getData', () => api.getTableDates());

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    addNewTableData: (state, action) => {
      state.tableData = [...state.tableData, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTableDates.fulfilled, (state, action) => {
        state.tableData = action.payload;
      })
      .addCase(getTableDates.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addNewTableData } = tablesSlice.actions;

export default tablesSlice.reducer;

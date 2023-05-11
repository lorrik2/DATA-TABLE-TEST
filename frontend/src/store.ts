import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tablesSlice from './features/table/tableSlice';

const store = configureStore({
  reducer: {
    tableState: tablesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

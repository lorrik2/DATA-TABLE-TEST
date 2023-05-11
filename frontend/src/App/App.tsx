import React, { useEffect } from 'react';
import './App.css';
import TabaleList from '../features/table/TabaleList';
import { useAppDispatch } from '../store';
import { getTableDates } from '../features/table/tableSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTableDates());
  }, [dispatch]);
  return (
    <div className="App">
      <TabaleList />
    </div>
  );
}

export default App;

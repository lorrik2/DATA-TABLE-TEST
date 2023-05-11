import React, { useEffect, useState } from 'react';
import './App.css';
import TableList from '../features/table/TableList';
import { RootState, useAppDispatch } from '../store';
import { getTableDates } from '../features/table/tableSlice';
import { useSelector } from 'react-redux';

function App(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerData, setTablePerData] = useState(10);
  const { tableData } = useSelector((store: RootState) => store.tableState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getTableDates());
    setLoading(false);
  }, [dispatch]);

  const lastTablePersonIndex = currentPage * tablePerData;
  const firstTablePersonIndex = lastTablePersonIndex - tablePerData;
  const currentTable = tableData.slice(firstTablePersonIndex, lastTablePersonIndex);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <TableList
        currentTable={currentTable}
        loading={loading}
        tablePerData={tablePerData}
        paginate={paginate}
      />
    </div>
  );
}

export default App;

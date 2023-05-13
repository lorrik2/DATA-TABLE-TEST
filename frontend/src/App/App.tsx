import React, { useEffect, useRef, useState } from 'react';
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
  const lastPaginatePage = Math.ceil(tableData.length / tablePerData);
  const firstTablePersonIndex = lastTablePersonIndex - tablePerData;
  const currentTable = tableData.slice(firstTablePersonIndex, lastTablePersonIndex);
  const liRef = useRef<HTMLUListElement>(null);

  const prevPage = (): void => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  const nextPage = (): void =>
    setCurrentPage((prev) => (prev < lastPaginatePage ? prev + 1 : lastPaginatePage));

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    prevPage();
    nextPage();
    if (liRef.current) {
      const li = liRef.current.querySelectorAll('li');
      li.forEach((el) => {
        if (el.dataset.number === String(pageNumber)) {
          el.className = 'waves-effect active';
        } else if (
          el.dataset.number === String(1) ||
          el.dataset.number === String(lastPaginatePage)
        ) {
          el.className = 'disabled';
        } else {
          el.className = 'waves-effect';
        }
      });
    }
  };

  return (
    <div className="App">
      <TableList
        currentTable={currentTable}
        loading={loading}
        tablePerData={tablePerData}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        liRef={liRef}
      />
    </div>
  );
}

export default App;

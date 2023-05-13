import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import TableList from '../features/table/TableList';
import { RootState, useAppDispatch } from '../store';
import { getTableDates } from '../features/table/tableSlice';
import { useSelector } from 'react-redux';
import { TableData } from '../features/table/types/Table';
import SearchCompo from '../features/table/search/SearchCompo';
import Modal from '../features/table/modal/Modal';

function App(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerData] = useState(10);
  const [contactData, setContactData] = useState<TableData[]>([]);
  const [caseCurrent, setCaseCurrent] = useState<number>(1);
  const [textSearch, setTextSearch] = useState('');
  const [result, setResult] = useState('');

  const { tableData } = useSelector((store: RootState) => store.tableState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getTableDates());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    setContactData(tableData);
  }, [tableData]);

  const onHandleSubmitForm = (
    e: React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    setResult(textSearch);
  };

  const filterData = (): TableData[] => {
    if (!result) {
      return contactData;
    }
    return contactData.filter((data) =>
      data.firstName.toLowerCase().includes(result.toLowerCase())
    );
  };

  const filerTable = filterData();

  console.log(filerTable, '-------');

  console.log(result);

  const lastTablePersonIndex = currentPage * tablePerData;
  const lastPaginatePage = Math.ceil(tableData.length / tablePerData);
  const firstTablePersonIndex = lastTablePersonIndex - tablePerData;
  const currentTable = filerTable.slice(firstTablePersonIndex, lastTablePersonIndex);
  const liRef = useRef<HTMLUListElement>(null);

  const prevPage = (): void => setCaseCurrent((prev) => (prev > 1 ? prev - 1 : 1));
  const nextPage = (): void =>
    setCaseCurrent((prev) => (prev < lastPaginatePage ? prev + 1 : lastPaginatePage));

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    setCaseCurrent(currentPage);
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
      <Modal />
      <SearchCompo
        onHandleSubmitForm={onHandleSubmitForm}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
      />
      <TableList
        currentTable={currentTable}
        loading={loading}
        tablePerData={tablePerData}
        filerTable={filerTable}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        liRef={liRef}
      />
    </div>
  );
}

export default App;

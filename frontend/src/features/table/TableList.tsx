import React, { useState } from 'react';
import './styles/tableList.css';
import RowData from './RowData';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import Pagination from './Pagination';
import { TableData } from './types/Table';
import Preloader from './loading/Preloader';
import { sortTableDates } from './tableSlice';

import InfoContact from './infoBlock/InfoContact';

function TabaleList({
  loading,
  tablePerData,
  currentTable,
  paginate,
  nextPage,
  prevPage,
  filerTable,
  liRef,
  contactData,
}: {
  loading: boolean;
  tablePerData: number;
  currentTable: TableData[];
  paginate: (value: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  filerTable: TableData[];
  liRef: React.RefObject<HTMLUListElement>;
  contactData: TableData[];
}): JSX.Element {
  const { tableData } = useSelector((store: RootState) => store.tableState);
  const [sortStatus, setSortStatus] = useState(false);
  const [sortedBy, setSortedBy] = useState('');
  const [icon, setIcon] = useState('▼');
  const [status, setStatus] = useState(false);
  const [info, setInfo] = useState<TableData | undefined>();

  const dispatch = useAppDispatch();

  const sortTableColumns = (sortBy: keyof TableData): void => {
    const copyData = tableData.concat();
    const sortData = copyData.sort((a, b) => {
      return sortStatus ? (a[sortBy] < b[sortBy] ? 1 : -1) : a[sortBy] > b[sortBy] ? 1 : -1;
    });

    const filteredData = sortData.filter((item, index, self) => {
      return index === self.findIndex((t) => t.id === item.id);
    });

    dispatch(sortTableDates(sortData));
    setSortedBy(sortBy);
    setSortStatus(!sortStatus);
    setIcon(sortStatus ? '▼' : '▲');
  };

  const onHandleClickRow = (data: TableData): void => {
    setInfo(data);
  };

  if (loading) {
    return <Preloader />;
  }
  return (
    <div>
      <table className="striped">
        <thead>
          <tr>
            <th onClick={() => sortTableColumns('id')}>Id {sortedBy === 'id' ? icon : '▼'}</th>
            <th onClick={() => sortTableColumns('firstName')}>
              First Name {sortedBy === 'firstName' ? icon : '▼'}
            </th>
            <th onClick={() => sortTableColumns('lastName')}>
              Last Name {sortedBy === 'lastName' ? icon : '▼'}
            </th>
            <th onClick={() => sortTableColumns('email')}>
              Email {sortedBy === 'email' ? icon : '▼'}
            </th>
            <th onClick={() => sortTableColumns('phone')}>
              Phone {sortedBy === 'phone' ? icon : '▼'}
            </th>
          </tr>
        </thead>

        <tbody>
          {currentTable.map((data) => (
            <RowData
              key={data.id + data.phone}
              data={data}
              onHandleClickRow={onHandleClickRow}
              setStatus={setStatus}
            />
          ))}
        </tbody>
      </table>
      <div className="paginate-center">
        <Pagination
          totalTableDates={filerTable.length}
          tablePerData={tablePerData}
          paginate={paginate}
          liRef={liRef}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
      {status && <InfoContact info={info} setStatus={setStatus} />}
    </div>
  );
}

export default TabaleList;

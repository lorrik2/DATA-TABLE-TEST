import React, { useEffect, useState } from 'react';
import './styles/tableList.css';
import RowDatas from './RowDatas';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import AddFormNewTableDates from './AddFormNewTableDates';
import Pagination from './Pagination';
import { TableData } from './types/Table';
import Preloader from './Preloader';
import { sortTableDates } from './tableSlice';
import Modal from './Modal';

function TabaleList({
  loading,
  tablePerData,
  currentTable,
  paginate,
  nextPage,
  prevPage,
}: {
  loading: boolean;
  tablePerData: number;
  currentTable: TableData[];
  paginate: (value: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}): JSX.Element {
  const { tableData } = useSelector((store: RootState) => store.tableState);
  const [sortStatus, setSortStatus] = useState(false);
  const [sortedBy, setSortedBy] = useState('');
  const [icon, setIcon] = useState('▼');

  const dispatch = useAppDispatch();

  const sortTableColumns = (sortBy: keyof TableData): void => {
    const copyData = tableData.concat();
    const sortData = copyData.sort((a, b) => {
      return sortStatus ? (a[sortBy] < b[sortBy] ? 1 : -1) : a[sortBy] > b[sortBy] ? 1 : -1;
    });
    dispatch(sortTableDates(sortData));
    setSortedBy(sortBy);
    setSortStatus(!sortStatus);
    setIcon(sortStatus ? '▼' : '▲');
  };

  if (loading) {
    return <Preloader />;
  }
  return (
    <div>
      <Modal />
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
            <RowDatas key={data.id} data={data} />
          ))}
        </tbody>
      </table>
      <div className="paginate-center">
        <i className="material-icons col s1" onClick={prevPage} style={{ cursor: 'pointer' }}>
          arrow_back
        </i>
        <Pagination
          totalTableDates={tableData.length}
          tablePerData={tablePerData}
          paginate={paginate}
        />
        <i className="material-icons col s1" onClick={nextPage} style={{ cursor: 'pointer' }}>
          arrow_forward
        </i>
      </div>
    </div>
  );
}

export default TabaleList;

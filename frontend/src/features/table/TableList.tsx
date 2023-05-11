import React, { useState } from 'react';
import './styles/tableList.css';
import RowDatas from './RowDatas';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import AddFormNewTableDates from './AddFormNewTableDates';
import BasicModal from './BasicModal';
import Pagination from './Pagination';
import { TableData } from './types/Table';

function TabaleList({
  loading,
  tablePerData,
  currentTable,
  paginate,
}: {
  loading: boolean;
  tablePerData: number;
  currentTable: TableData[];
  paginate: (value: number) => void;
}): JSX.Element {
  const { tableData } = useSelector((store: RootState) => store.tableState);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <BasicModal />
      <AddFormNewTableDates />
      <table className="striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {currentTable.map((data) => (
            <RowDatas key={data.id} data={data} />
          ))}
        </tbody>
      </table>
      <Pagination
        totalTableDates={tableData.length}
        tablePerData={tablePerData}
        paginate={paginate}
      />
    </div>
  );
}

export default TabaleList;

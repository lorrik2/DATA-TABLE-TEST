import React from 'react';
import './styles/tableList.css';
import RowDatas from './RowDatas';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function TabaleList(): JSX.Element {
  const { tableData } = useSelector((store: RootState) => store.tableState);
  return (
    <div>
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
          {tableData.map((data) => (
            <RowDatas key={data.id} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabaleList;

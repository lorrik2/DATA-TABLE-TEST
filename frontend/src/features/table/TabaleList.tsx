import React from 'react';
import './styles/tableList.css';
import RowDatas from './RowDatas';

function TabaleList(): JSX.Element {
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
          <RowDatas />
        </tbody>
      </table>
    </div>
  );
}

export default TabaleList;

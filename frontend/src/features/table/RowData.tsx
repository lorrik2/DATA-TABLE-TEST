import React from 'react';
import { TableData } from './types/Table';

function RowData({
  data,
  onHandleClickRow,
  setStatus,
}: {
  data: TableData;
  onHandleClickRow: (val: TableData) => void;
  setStatus: (val: boolean) => void;
}): JSX.Element {
  return (
    <tr
      key={data.id + data.email}
      onClick={() => {
        onHandleClickRow(data);
        setStatus(true);
      }}>
      <td>{data.id}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
    </tr>
  );
}

export default RowData;

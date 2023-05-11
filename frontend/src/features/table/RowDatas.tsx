import React from 'react';
import { TableData } from './types/Table';

function RowDatas({ data }: { data: TableData }): JSX.Element {
  console.log(data, '--data api');
  return (
    <>
      <tr>
        <td>{data.id}</td>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
      </tr>
    </>
  );
}

export default RowDatas;

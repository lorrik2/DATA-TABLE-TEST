import React from 'react';

function Pagination({
  tablePerData,
  totalTableDates,
  paginate,
}: {
  tablePerData: number;
  totalTableDates: number;
  paginate: (value: number) => void;
}): JSX.Element {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTableDates / tablePerData); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination col s2">
      {pageNumbers?.map((number) => (
        <li className="waves-effect" key={number}>
          <a href="#!" onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;

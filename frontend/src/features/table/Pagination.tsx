import React, { useState } from 'react';

function Pagination({
  tablePerData,
  totalTableDates,
  paginate,
  liRef,
}: {
  tablePerData: number;
  totalTableDates: number;
  paginate: (value: number) => void;
  liRef: React.RefObject<HTMLUListElement>;
}): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTableDates / tablePerData); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination col s2" ref={liRef}>
      {pageNumbers.map((number) => (
        <li
          className={number === currentPage ? 'waves-effect active' : 'waves-effect'}
          key={number}>
          <a
            href="#!"
            onClick={() => {
              paginate(number);
              setCurrentPage(number);
            }}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;

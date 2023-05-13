import React, { useState } from 'react';

function Pagination({
  tablePerData,
  totalTableDates,
  paginate,
  liRef,
  prevPage,
  nextPage,
}: {
  tablePerData: number;
  totalTableDates: number;
  paginate: (value: number) => void;
  liRef: React.RefObject<HTMLUListElement>;
  prevPage: () => void;
  nextPage: () => void;
}): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTableDates / tablePerData); i++) {
    pageNumbers.push(i);
  }

  const isLastPage = currentPage === pageNumbers[pageNumbers.length - 1];
  const isFirstPage = currentPage === pageNumbers[0];

  return (
    <ul className="pagination col s2" ref={liRef}>
      <li className={isFirstPage ? 'disabled' : 'waves-effect'} onClick={prevPage}>
        <a href="#!">
          <i
            className="material-icons"
            onClick={() => {
              if (!isFirstPage) {
                setCurrentPage(Math.max(currentPage - 1, 1));
                paginate(Math.max(currentPage - 1, 1));
              }
            }}>
            chevron_left
          </i>
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li
          className={number === currentPage ? 'waves-effect active' : 'waves-effect'}
          key={number}
          onClick={() => {
            setCurrentPage(number);
            paginate(number);
          }}>
          <a href="#!">{number}</a>
        </li>
      ))}
      <li className={isLastPage ? 'disabled' : 'waves-effect'} onClick={nextPage}>
        <a href="#!">
          <i
            className="material-icons"
            onClick={() => {
              if (!isLastPage) {
                setCurrentPage(currentPage + 1);
                paginate(currentPage + 1);
              }
            }}>
            chevron_right
          </i>
        </a>
      </li>
    </ul>
  );
}

export default Pagination;

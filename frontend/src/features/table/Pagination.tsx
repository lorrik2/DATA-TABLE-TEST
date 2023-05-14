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
  const [currentsPage, setCurrentsPage] = useState(1);
  const pageNumbers = [];
  console.log(totalTableDates, tablePerData, 'WTF');

  for (let i = 1; i <= Math.ceil(totalTableDates / tablePerData); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  const isLastPage = currentsPage === pageNumbers[pageNumbers.length - 1];
  const isFirstPage = currentsPage === pageNumbers[0];

  return (
    <ul className="pagination col s2" ref={liRef}>
      <li className={isFirstPage ? 'disabled' : 'waves-effect'} onClick={prevPage}>
        <a href="#!">
          <i
            className="material-icons"
            onClick={() => {
              if (!isFirstPage) {
                setCurrentsPage(Math.max(currentsPage - 1, 1));
                paginate(Math.max(currentsPage - 1, 1));
              }
            }}>
            chevron_left
          </i>
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li
          className={number === currentsPage ? 'waves-effect active' : 'waves-effect'}
          key={number}
          onClick={() => {
            setCurrentsPage(number);
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
                setCurrentsPage(currentsPage + 1);
                paginate(currentsPage + 1);
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

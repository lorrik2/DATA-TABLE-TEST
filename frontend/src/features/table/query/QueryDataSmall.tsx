import React from 'react';
import './styles/query.css';

function QueryDataSmall({
  setReqQwrt,
  setLoading,
  loading,
}: {
  setReqQwrt: (num: string) => void;
  setLoading: (val: boolean) => void;
  loading: boolean;
}): JSX.Element {
  const onHandleClickBtn = (): void => {
    setReqQwrt('32');
  };
  return (
    <a
      className={
        loading === true
          ? 'disabled query-constr'
          : 'btn-floating btn-large waves-effect waves-light purple lighten-3 query-constr'
      }
      onClick={onHandleClickBtn}>
      Small
    </a>
  );
}

export default QueryDataSmall;

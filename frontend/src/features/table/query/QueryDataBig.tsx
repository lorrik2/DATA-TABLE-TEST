import React, { useEffect, useState } from 'react';
import './styles/query.css';

function QueryDataBig({
  setReqQwrt,
  setLoading,
  loading,
}: {
  setReqQwrt: (num: string) => void;
  setLoading: (val: boolean) => void;
  loading: boolean;
}): JSX.Element {
  const onClickHandleBtn = (): void => {
    setReqQwrt('1000');
  };

  return (
    <a
      className={
        loading === true
          ? 'disabled query-constr'
          : 'btn-floating btn-large waves-effect waves-light purple lighten-3 query-constr'
      }
      onClick={onClickHandleBtn}>
      Big
    </a>
  );
}

export default QueryDataBig;

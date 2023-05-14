import React, { useEffect, useState } from 'react';

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
      //"btn-floating btn-large waves-effect waves-light purple lighten-3"
      className={
        loading === true
          ? 'disabled'
          : 'btn-floating btn-large waves-effect waves-light purple lighten-3'
      }
      onClick={onClickHandleBtn}>
      Big
    </a>
  );
}

export default QueryDataBig;

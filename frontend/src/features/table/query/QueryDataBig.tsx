import React, { useEffect, useState } from 'react';

function QueryDataBig({ setReqQwrt }: { setReqQwrt: (num: string) => void }): JSX.Element {
  const onClickHandleBtn = (): void => {
    setReqQwrt('1000');
  };

  return (
    <a
      className="btn-floating btn-large waves-effect waves-light purple lighten-3"
      onClick={onClickHandleBtn}>
      Big
    </a>
  );
}

export default QueryDataBig;

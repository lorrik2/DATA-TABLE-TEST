import React from 'react';

function QueryDataSmall({ setReqQwrt }: { setReqQwrt: (num: string) => void }): JSX.Element {
  const onHandleClickBtn = (): void => {
    setReqQwrt('32');
  };
  return (
    <a
      className="btn-floating btn-large waves-effect waves-light purple lighten-3"
      onClick={onHandleClickBtn}>
      Small
    </a>
  );
}

export default QueryDataSmall;

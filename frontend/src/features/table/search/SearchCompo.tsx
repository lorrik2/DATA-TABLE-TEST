import React, { useState } from 'react';
import { TableData } from '../types/Table';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

function SearchCompo(): JSX.Element {
  const [textSearch, setTextSearch] = useState('');
  const [result, setResult] = useState('');
  const { tableData } = useSelector((store: RootState) => store.tableState);

  const onHandleSubmitForm = (
    e: React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    setResult(textSearch);
    setTextSearch('');
  };

  const filterData = tableData.filter((data) => {
    data.firstName.toLowerCase().includes(result.toLowerCase());
  });
  //    const values = Object.values(data);
  //    values.forEach((el) => el === result);
  //  });

  console.log(filterData);

  return (
    <form onSubmit={onHandleSubmitForm}>
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <input
                type="text"
                id="autocomplete-input"
                className="autocomplete"
                value={textSearch}
                onBlur={onHandleSubmitForm}
                onChange={(e) => setTextSearch(e.target.value)}
              />
              <label htmlFor="autocomplete-input">Search</label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchCompo;

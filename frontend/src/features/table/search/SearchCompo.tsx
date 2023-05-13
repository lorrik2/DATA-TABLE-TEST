import React from 'react';

import './styles/searchIpm.css';

function SearchCompo({
  onHandleSubmitForm,
  textSearch,
  setTextSearch,
}: {
  onHandleSubmitForm: (
    val: React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>
  ) => void;
  textSearch: string;
  setTextSearch: (val: string) => void;
}): JSX.Element {
  return (
    <form onSubmit={onHandleSubmitForm} className="search-form">
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

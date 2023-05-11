import React, { useState } from 'react';
import { PersonAddress, TableData } from './types/Table';
import { RootState, useAppDispatch } from '../../store';
import { addNewTableData } from './tableSlice';
import { useSelector } from 'react-redux';

function AddFormNewTableDates(): JSX.Element {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');

  const { tableData } = useSelector((store: RootState) => store.tableState);

  const dispatch = useAppDispatch();

  const onHandleFotmSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validate = tableData.find();
    const newTableData: TableData = {
      id: 1,
      firstName,
      lastName,
      email,
      phone,
      address: {
        streetAddress: street,
        city,
        state,
        zip,
      },
      description,
    };
    console.log(newTableData);
    dispatch(addNewTableData(newTableData));
  };

  return (
    <div>
      <h5>Information</h5>
      <div className="row">
        <form className="col s12" onSubmit={onHandleFotmSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                type="text"
                className="validate"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="last_name"
                type="text"
                className="validate"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="phone"
                type="tel"
                className="validate"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <span className="helper-text" data-error="wrong" data-success="right">
                Must be unique
              </span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}></textarea>
              <label htmlFor="textarea1">Description</label>
            </div>
          </div>
          <h5>Address</h5>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="state"
                type="text"
                className="validate"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <label htmlFor="state">State</label>
            </div>
            <div className="input-field col s6">
              <input
                id="city"
                type="text"
                className="validate"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <label htmlFor="city">City</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="street"
                type="text"
                className="validate"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <label htmlFor="street">Street address</label>
            </div>
            <div className="input-field col s6">
              <input
                id="zip"
                type="text"
                className="validate"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
              <label htmlFor="zip">ZIP</label>
            </div>
          </div>

          <button type="submit" className="waves-effect waves-light btn">
            button
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFormNewTableDates;

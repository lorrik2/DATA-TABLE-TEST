import React from 'react';
import './styles/infoContact.css';
import { TableData } from '../types/Table';

function InfoContact({
  info,
  setStatus,
}: {
  info: TableData | undefined;
  setStatus: (val: boolean) => void;
}): JSX.Element {
  return (
    <div className="row center-contact">
      <div className="col s12 m5 " style={{ marginLeft: 0 }}>
        <div className="card-panel teal block_contact">
          <h4>
            Выбран пользователь
            <br />
            <b>
              {info?.firstName} {info?.lastName}
            </b>
          </h4>
          <p>
            Описание: <textarea disabled value={info?.description} className="text-a"></textarea>
          </p>
          <p>
            Адрес проживания: <b>{info?.address.streetAddress}</b>
          </p>
          <p>
            Город: <b>{info?.address.city}</b>
          </p>
          <p>
            Провинция/штат: <b>{info?.address.state}</b>
          </p>
          <p>
            Индекс: <b>{info?.address.zip}</b>
          </p>
          <a
            type="button"
            onClick={() => setStatus(false)}
            className="waves-effect waves-light btn-small">
            Close
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoContact;

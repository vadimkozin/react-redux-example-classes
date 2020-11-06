import React from "react";
import {func, string} from 'prop-types';

const PhoneItem = (props) => {
  const {text: namePhone, deletePhone} = props;

  return (
    <div>
      <p>
        <b>{namePhone}</b><br />
        <button onClick={() => deletePhone(namePhone)}>Удалить</button>
      </p>
    </div>
  );
};

PhoneItem.propTypes = {
  text: string.isRequired,
  deletePhone: func.isRequired
};

export default PhoneItem;

import React from "react";
import {func} from 'prop-types';

const PhoneForm = (props) => {
  const {addPhone} = props;
  const textInput = React.createRef();

  const handlerClick = (evt) => {
    evt.preventDefault();

    const namePhone = textInput.current.value;

    if (namePhone !== ``) {
      textInput.current.value = ``;
      addPhone(namePhone);
    }
  };

  return (
    <div>
      <input ref={textInput} />
      <button onClick = {handlerClick}>Добавить</button>
    </div>
  );
};

PhoneForm.propTypes = {
  addPhone: func.isRequired
};

export default PhoneForm;

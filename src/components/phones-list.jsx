import React from "react";
import {func, string, arrayOf} from 'prop-types';
import PhoneItem from '../components/phone-item';

const PhonesList = (props) => {
  const {phones, deletePhone} = props;

  return (
    <div>
      {phones.map((item, i) =>
        <PhoneItem key={i}
          text={item}
          deletePhone={deletePhone}/>
      )}
    </div>
  );
};

PhonesList.propTypes = {
  phones: arrayOf(string).isRequired,
  deletePhone: func.isRequired,
};

export default PhonesList;

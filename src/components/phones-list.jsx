import React from "react";
import {func, string, arrayOf} from 'prop-types';
import PhoneItem from '../components/phone-item';

class PhonesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.phones.map((item, i) =>
          <PhoneItem key={i}
            text={item}
            deletePhone={this.props.deletePhone}/>
        )}
      </div>
    );
  }
}

PhonesList.propTypes = {
  phones: arrayOf(string).isRequired,
  deletePhone: func.isRequired,
};

export default PhonesList;

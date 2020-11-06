import React from "react";
import {func, string} from 'prop-types';

class PhoneItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          <b>{this.props.text}</b><br />
          <button onClick={() =>
            this.props.deletePhone(this.props.text)}>Удалить</button>
        </p>
      </div>
    );
  }
}

PhoneItem.propTypes = {
  text: string.isRequired,
  deletePhone: func.isRequired
};

export default PhoneItem;

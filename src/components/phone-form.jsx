import React from "react";
import {func} from 'prop-types';

class PhoneForm extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick(evt) {
    evt.preventDefault();

    const value = this.textInput.current.value;

    if (value !== ``) {
      this.textInput.current.value = ``;
      return this.props.addPhone(value);
    }

    return false;
  }

  render() {
    return <div>
      <input ref={this.textInput} />
      <button onClick = {this.handlerClick}>Добавить</button>
    </div>;
  }
}

PhoneForm.propTypes = {
  addPhone: func.isRequired
};

export default PhoneForm;

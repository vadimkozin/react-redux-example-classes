import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../actions";
import {func, arrayOf, string} from 'prop-types';
import PhoneForm from '../components/phone-form';
import PhonesList from '../components/phones-list';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PhoneForm addPhone={this.props.addPhone}/>
        <PhonesList {...this.props} />
      </div>
    );
  }
}

App.propTypes = {
  addPhone: func.isRequired,
  phones: arrayOf(string).isRequired,
  deletePhone: func.isRequired,
};

const mapStateToProps = (state) => ({
  phones: state.phones,
});

const mapDispatchToProps = (dispath) => ({
  addPhone(phone) {
    dispath(ActionCreator.addPhone(phone));
  },
  deletePhone(phone) {
    dispath(ActionCreator.deletePhone(phone));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


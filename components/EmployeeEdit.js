import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import autobind from 'react-autobind';

import { employeeUpdate, employeeSave } from '../actions';

import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  constructor(props) {
    super(props);

    autobind(this);
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid,
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  name: state.employeeForm.name,
  phone: state.employeeForm.phone,
  shift: state.employeeForm.shift,
});

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);

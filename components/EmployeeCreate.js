import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import autobind from 'react-autobind';

import { employeeUpdate, employeeCreate } from '../actions';

import { Card, CardSection, Input, Button } from './common';

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);

    autobind(this);
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <View>
          <CardSection>
            <Input
              label="Name"
              placeholder="Name"
              value={this.props.name}
              onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Phone"
              placeholder="555-555-5555"
              value={this.props.phone}
              onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
            />
          </CardSection>
          <CardSection style={{ flexDirection: 'column' }}>
            <Text style={styles.pickerLabelStyle}>Shift Day</Text>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardSection>
        </View>
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);

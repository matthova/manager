import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'react-autobind';

import { emailChanged, passwordChanged } from '../actions';

import { Button, Card, CardSection, Input } from './common';

const styles = {};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    autobind(this);
  }
  componentDidMount() {}

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
});

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);

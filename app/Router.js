import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Platform } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const styles = {
  navBar: {
    marginTop: Platform.OS === 'ios' ? 0 : 24,
  },
  sceneStyle: {
    paddingTop: Platform.OS === 'ios' ? 65 : 84,
  },
};

const RouterComponent = () => (
  <Router navigationBarStyle={styles.navBar} sceneStyle={styles.sceneStyle}>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => {
            Actions.employeeCreate();
          }}
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;

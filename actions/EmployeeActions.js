import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value },
});

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  const userId = currentUser.uid;
  const databaseRef = `/users/${userId}/employees`;

  return (dispatch) => {
    firebase
      .database()
      .ref(databaseRef)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

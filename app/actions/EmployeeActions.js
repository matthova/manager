import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
} from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value },
});

const getDatabaseRef = () => {
  const { currentUser } = firebase.auth();
  const userId = currentUser.uid;
  const databaseRef = `/users/${userId}/employees`;
  return databaseRef;
};

export const employeeCreate = ({ name, phone, shift }) => {
  const databaseRef = getDatabaseRef();

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

export const employeesFetch = () => (dispatch) => {
  const databaseRef = getDatabaseRef();
  firebase
    .database()
    .ref(databaseRef)
    .on('value', (snapshot) => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
};

export const employeeSave = ({
  name, phone, shift, uid,
}) => (dispatch) => {
  const { currentUser } = firebase.auth();

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({
      name,
      phone,
      shift,
      uid,
    })
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
      Actions.employeeList({ type: 'reset' });
    });
};

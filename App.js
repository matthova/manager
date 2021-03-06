import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './app/reducers';

import Router from './app/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyALMvD1BdJovNH3fw_TVhNkFf0Ab2ORmtA',
      authDomain: 'udemy-manager-437a7.firebaseapp.com',
      databaseURL: 'https://udemy-manager-437a7.firebaseio.com',
      projectId: 'udemy-manager-437a7',
      storageBucket: 'udemy-manager-437a7.appspot.com',
      messagingSenderId: '748554747493',
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log('got a user');
      } else {
        // console.log('nope');
      }
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

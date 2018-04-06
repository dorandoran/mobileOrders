import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import firebase from 'firebase';

import Router from './src/Router';

class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "[INSERT API KEY]]",
      authDomain: "[INSERT AUTHDOMAIN KEY]",
      databaseURL: "[INSERT APP URL]",
      projectId: "[INSERT PROJECT ID KEY]",
      storageBucket: "[INSERT STORAGE BUCKET URL]",
      messagingSenderId: "[INSERT SENDER ID KEY]"
    });
  }

  render () {
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
    return <Router />
  }
}

export default App;
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App'

export default class Presnt extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Presnt', () => Presnt);

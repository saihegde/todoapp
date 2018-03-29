import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header/>
);
        
// Render it to the device
AppRegistry.registerComponent('todoapp', () => App);
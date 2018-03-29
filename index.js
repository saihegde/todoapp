import React, { Component } from 'react';
import { Text , AppRegistry } from 'react-native';

const App = () => (
  <Text>Hello</Text>
);
        
// Render it to the device
AppRegistry.registerComponent('todoapp', () => App);
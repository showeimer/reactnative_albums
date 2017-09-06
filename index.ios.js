// Index.ios.js - placecode in here for iOS

// Import React library
import React from 'react';
import {Text, AppRegistry} from 'react-native';

// Create Component

const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

// Render Component to device
AppRegistry.registerComponent('albums', () => App);

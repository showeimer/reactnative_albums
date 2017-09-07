// Index.ios.js - placecode in here for iOS

// Import React library
import React from 'react';
import {AppRegistry} from 'react-native';

// Import components
import Header from './src/components/Header';

// Create Component

const App = () => {
  return (
    <Header />
  );
};

// Render Component to device
AppRegistry.registerComponent('albums', () => App);

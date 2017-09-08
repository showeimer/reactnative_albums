
// Import React library
import React from 'react';
import { AppRegistry, View } from 'react-native';

// Import components
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create Component

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// Render Component to device
AppRegistry.registerComponent('albums', () => App);

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

const App = () => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: 'blue',
      }}
    />

    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
      }}
    />
  </View>
);

export default App;

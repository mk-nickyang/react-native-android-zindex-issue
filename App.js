/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          // elevation: 1,
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
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // opacity: 0.5,
        }}
      />
    </View>
  );
};

export default App;

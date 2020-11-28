import React from 'react';
import GCanvasView from 'react-native-gcanvas';

import {StatusBar, StyleSheet} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <GCanvasView style={styles.bgBlack} />
    </>
  );
};

const styles = StyleSheet.create({
  bgBlack: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;

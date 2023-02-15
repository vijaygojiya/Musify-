import { StyleSheet, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/router';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <AppNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
});

import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppNavigator from './src/router';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <StatusBar backgroundColor={colors.secondaryBg} /> */}
      <View style={styles.appContainer}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import ErrorBoundary from './src/component/ErrorBoundary';

import { store } from './src/redux/store';
import AppNavigator from './src/router';
import colors from './src/utils/colors';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <StatusBar backgroundColor={colors.secondaryBg} />
        <View style={styles.appContainer}>
          <AppNavigator />
        </View>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

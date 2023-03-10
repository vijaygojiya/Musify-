import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import ErrorBoundary from './src/component/ErrorBoundary';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import { store } from './src/redux/store';
import AppNavigator from './src/router';
import colors from './src/utils/colors';

const App = () => {
  useEffect(() => {
    SystemNavigationBar.setNavigationColor(colors.dark_blue, 'light', 'navigation');
  }, []);
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <StatusBar backgroundColor={colors.dark_blue} />
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

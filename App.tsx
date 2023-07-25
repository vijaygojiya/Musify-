import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import ErrorBoundary from './src/component/ErrorBoundary';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import {persistor, store} from './src/redux/store';
import AppNavigator from './src/router';
import colors from './src/utils/colors';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content')
    SystemNavigationBar.setNavigationColor(
      colors.dark_blue,
      'light',
      'navigation',
    );
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <StatusBar backgroundColor={colors.dark_blue} />
          <View style={styles.appContainer}>
            <AppNavigator />
          </View>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

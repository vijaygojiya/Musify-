import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './src/redux/store';
import AppNavigator from './src/router';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <StatusBar backgroundColor={colors.secondaryBg} /> */}
        <View style={styles.appContainer}>
          <AppNavigator />
        </View>
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

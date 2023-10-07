import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import './src/translations';
import ApplicationNavigator from './src/navigators/Application';
import {persistor, store} from './src/store';
import {StatusBar} from 'react-native';
import {Colors} from './src/theme/Variables';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const App = () => {
  useEffect(() => {
    SystemNavigationBar.setNavigationColor(
      Colors.primaryBg,
      'light',
      'navigation',
    );
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          translucent={true}
          backgroundColor={Colors.primaryBg}
          barStyle="light-content"
        />
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

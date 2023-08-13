import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {SplashScreen} from '../screens';

import {Routes} from './routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './Tab';
import {Colors} from '../theme/Variables';

const Stack = createNativeStackNavigator();
const AppTheme = {
  colors: {
    background: Colors.secondaryBg,
  },
} as Theme;
const ApplicationNavigator = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
        initialRouteName={Routes.Splash}>
        <Stack.Screen name={Routes.Splash} component={SplashScreen} />
        <Stack.Screen name={Routes.Dashboard} component={TabNavigator} />
      </Stack.Navigator>
      {/* <MiniPlayer /> */}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;

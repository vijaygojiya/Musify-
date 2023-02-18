import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { routes } from './routes';
import SplashScreen from '../screens/auth/splash';
import FavouritesScreen from '../screens/favourites';
import HomeScreen from '../screens/home';
import MyMusicScreen from '../screens/myMusic';
import SearchScreen from '../screens/search';
import ProfileScreen from '../screens/profile';
import CustomTabBar from './customtabbar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    backBehavior="none"
    screenOptions={{
      headerShown: false,
      lazy: true,
      tabBarHideOnKeyboard: true,
    }}
    tabBar={(props) => <CustomTabBar {...props} />}
  >
    <Tab.Screen key="HomeScreenTab" name={routes.Home} component={HomeScreen} />
    <Tab.Screen key="SearchScreenTab" name={routes.Search} component={SearchScreen} />
    <Tab.Screen key="FavouritesScreenTab" name={routes.Favourites} component={FavouritesScreen} />
    <Tab.Screen key="MyMusicScreenTab" name={routes.MyMusic} component={MyMusicScreen} />
    <Tab.Screen key="ProfileScreenTab" name={routes.Profile} component={ProfileScreen} />
  </Tab.Navigator>
);

const AppContainer = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName={routes.Splash}
    >
      <Stack.Screen name={routes.Splash} component={SplashScreen} />
      <Stack.Screen name={routes.Dashboard} component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppContainer;

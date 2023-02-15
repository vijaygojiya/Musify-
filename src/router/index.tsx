import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import SplashScreen from '../screens/auth/splash';
import CustomTabBar from './customtabbar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavouritesScreen from '../screens/favourites';
import PlayListsScreen from '../screens/playlists';
import MyMusicScreen from '../screens/mymusic';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => {
        return <CustomTabBar {...props} />;
      }}>
      <Tab.Screen
        key="MyMusicScreenTab"
        name={routes.MyMusic}
        component={MyMusicScreen}
      />
      <Tab.Screen
        key="FavouritesScreenTab"
        name={routes.Favourites}
        component={FavouritesScreen}
      />
      <Tab.Screen
        key="PlaylistScreenTab"
        name={routes.Playlist}
        component={PlayListsScreen}
      />
    </Tab.Navigator>
  );
};

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
        initialRouteName={routes.Splash}>
        <Stack.Screen name={routes.Splash} component={SplashScreen} />
        <Stack.Screen name={routes.Dashboard} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Routes} from './routes';
import {
  FavoritesScreen,
  HomeScreen,
  MyMusicScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens';
import TabBar from './TabBar';
const Tab = createBottomTabNavigator();

const renderCustonTab = (props: BottomTabBarProps) => {
  return <TabBar {...props} />;
};

const TabNavigator = () => (
  <Tab.Navigator
    backBehavior="none"
    screenOptions={{
      headerShown: false,
      lazy: true,
      tabBarHideOnKeyboard: true,
    }}
    tabBar={renderCustonTab}>
    <Tab.Screen key="HomeScreenTab" name={Routes.Home} component={HomeScreen} />
    <Tab.Screen
      key="SearchScreenTab"
      name={Routes.Search}
      component={SearchScreen}
    />
    <Tab.Screen
      key="FavoritesScreenTab"
      name={Routes.Favorites}
      component={FavoritesScreen}
    />
    <Tab.Screen
      key="MyMusicScreenTab"
      name={Routes.MyMusic}
      component={MyMusicScreen}
    />
    <Tab.Screen
      key="ProfileScreenTab"
      name={Routes.Profile}
      component={ProfileScreen}
    />
  </Tab.Navigator>
);

export default TabNavigator;

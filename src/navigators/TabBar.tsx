import React, {memo, useCallback} from 'react';
import {FlatList, ImageSourcePropType, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import colors from '../utils/colors';
import {TypeOfTabBar} from '../utils/enum';

import ItemTab from './itemtab';
import {Routes} from '../navigators/routes';
import {Images} from '../theme';
import {useNavigationState} from '@react-navigation/native';
import {Colors} from '../theme/Variables';

const TabBarList = [
  {
    Name: 'Home',
    Icon: Images.ic_home,
    Navigation: Routes.Home,
  },
  {
    Name: 'Search',
    Icon: Images.ic_search,
    Navigation: Routes.Search,
  },

  {
    Name: 'Favorites',
    Icon: Images.ic_heart,
    Navigation: Routes.Favorites,
  },
  {
    Name: 'MyMusic',
    Icon: Images.ic_headphone,
    Navigation: Routes.MyMusic,
  },
  {
    Name: 'Profile',
    Icon: Images.ic_profile,
    Navigation: Routes.Profile,
  },
];

const CustomTabBar = (props: {navigation: any}) => {
  const {navigation} = props;
  const currentIndex =
    useNavigationState(state => {
      return state.routes[0].state?.index;
    }) ?? 0;
  const onTabClick = useCallback((index: React.SetStateAction<number>) => {
    switch (index) {
      case TypeOfTabBar.Home:
        navigation.navigate(Routes.Home);
        break;
      case TypeOfTabBar.Search:
        navigation.navigate(Routes.Search);
        break;

      case TypeOfTabBar.Favorites:
        navigation.navigate(Routes.Favorites);
        break;
      case TypeOfTabBar.MyMusic:
        navigation.navigate(Routes.MyMusic);
        break;
      case TypeOfTabBar.Profile:
        navigation.navigate(Routes.Profile);
        break;
    }
  }, []);

  const renderTabItem: React.FC<{
    item: {
      Name: string;
      Icon: ImageSourcePropType;
      Navigation: string;
    };
    index: number;
  }> = ({item, index}) => {
    return (
      <ItemTab
        item={item}
        key={`custom-tab-${index}`}
        index={index}
        onTabClickListener={onTabClick}
        isSelected={currentIndex === index}
      />
    );
  };

  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={styles.saContainer}>
      <FlatList
        horizontal
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{backgroundColor: Colors.transparent}}
        style={{backgroundColor: Colors.transparent}}
        data={TabBarList}
        renderItem={renderTabItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saContainer: {
    backgroundColor: colors.primaryBg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,

    // elevation: 12,
  },
});
export default memo(CustomTabBar);

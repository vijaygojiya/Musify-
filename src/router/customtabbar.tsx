import React, {memo, useCallback, useState} from 'react';
import {FlatList, ImageSourcePropType, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import AppImages from '../assets/images';
import colors from '../utils/colors';
import {Type_Of_TabBar} from '../utils/enum';
import string from '../utils/string';

import ItemTab from './itemtab';
import {routes} from './routes';

const TabBarList = [
  {
    Name: string.Home,
    Icon: AppImages.ic_home,
    Navigation: routes.Home,
  },
  {
    Name: string.Search,
    Icon: AppImages.ic_search,
    Navigation: routes.Search,
  },

  {
    Name: string.Favorites,
    Icon: AppImages.ic_heart,
    Navigation: routes.Favorites,
  },
  {
    Name: string.MyMusic,
    Icon: AppImages.ic_headphone,
    Navigation: routes.MyMusic,
  },
  {
    Name: string.Profile,
    Icon: AppImages.ic_profile,
    Navigation: routes.Profile,
  },
];

const CustomTabBar = (props: {navigation: any}) => {
  const {navigation} = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onTabClick = useCallback((index: React.SetStateAction<number>) => {
    setSelectedIndex(index);
    switch (index) {
      case Type_Of_TabBar.Home:
        navigation.navigate(routes.Home);
        break;
      case Type_Of_TabBar.Search:
        navigation.navigate(routes.Search);
        break;

      case Type_Of_TabBar.Favorites:
        navigation.navigate(routes.Favorites);
        break;
      case Type_Of_TabBar.MyMusic:
        navigation.navigate(routes.MyMusic);
        break;
      case Type_Of_TabBar.Profile:
        navigation.navigate(routes.Profile);
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
        isSelected={selectedIndex === index}
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
        data={TabBarList}
        renderItem={renderTabItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saContainer: {
    backgroundColor: colors.dark_blue,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,

    elevation: 12,
  },
});
export default memo(CustomTabBar);

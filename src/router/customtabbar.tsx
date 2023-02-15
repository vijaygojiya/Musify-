import React, {useState} from 'react';
import {FlatList, ImageSourcePropType, StyleSheet, View, ViewStyle} from 'react-native';

import AppImages from '../assets/images';
import colors from '../utils/colors';
import {Type_Of_TabBar} from '../utils/enum';
import string from '../utils/string';
import styleConfig from '../utils/styleConfig';
import GS from '../utils/styles';
import ItemTab from './itemtab';
import {routes} from './routes';

const TabBarList = [
  {
    Name: string.MyMusic,
    Icon: AppImages.ic_headphone,
    Navigation: routes.MyMusic,
  },
  {
    Name: string.Favourites,
    Icon: AppImages.ic_heart,
    Navigation: routes.Favourites,
  },
  {
    Name: string.Search,
    Icon: AppImages.ic_search,
    Navigation: routes.Playlist,
  },
];

const CustomTabBar = (props: {navigation: any}) => {
  const {navigation} = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onTabClick = (index: React.SetStateAction<number>) => {
    setSelectedIndex(index);
    switch (index) {
      case Type_Of_TabBar.MyMusic:
        navigation.navigate(routes.MyMusic);
        break;
      case Type_Of_TabBar.Favourites:
        navigation.navigate(routes.Favourites);
        break;
      case Type_Of_TabBar.PlayLists:
        navigation.navigate(routes.Playlist);
        break;
    }
  };

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
   <View></View>
  );
};

const absoluteStyle = {
  position: 'absolute',
  height: styleConfig.smartScale(50),
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  borderRadius: styleConfig.countPixelRatio(17)
} as ViewStyle;

const styles = StyleSheet.create({
  saContainer: {
    backgroundColor: colors.white,
    borderRadius :styleConfig.countPixelRatio(17),
    ...GS.shadowEffect,
    
  },
  flTabContainer: {
    justifyContent: 'space-around',
    flex: 1,
  },

  container: {
    ...absoluteStyle,
  },
  item: {
    flex: 1,
  },
  blurView: {
    ...absoluteStyle,
  },
  gradientContainer: {
    ...absoluteStyle,
  },
});
export default CustomTabBar;

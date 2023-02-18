import {BlurView} from '@react-native-community/blur';
import React, {useState} from 'react';
import {
  FlatList,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SafeAreaView from 'react-native-safe-area-view';

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
    Name: string.Favourites,
    Icon: AppImages.ic_heart,
    Navigation: routes.Favourites,
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

  const onTabClick = (index: React.SetStateAction<number>) => {
    console.log('inddex', index);

    setSelectedIndex(index);
    switch (index) {
      case Type_Of_TabBar.Home:
        navigation.navigate(routes.Home);
        break;
      case Type_Of_TabBar.Search:
        navigation.navigate(routes.Search);
        break;

      case Type_Of_TabBar.Favourites:
        navigation.navigate(routes.Favourites);
        break;
      case Type_Of_TabBar.MyMusic:
        navigation.navigate(routes.MyMusic);
        break;
      case Type_Of_TabBar.Profile:
        navigation.navigate(routes.Profile);
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
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={styles.saContainer}>
      <BlurView
        style={[styles.blurView]}
        overlayColor={colors.transparent}
        blurAmount={10}
        blurRadius={7}>
        <LinearGradient
          colors={[colors.transparent, colors.extraDarkGrey]}
          style={[styles.gradientContainer]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1.5}}>
          <View style={styles.container}>
            <FlatList
              horizontal={true}
              overScrollMode="never"
              showsHorizontalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={styles.flTabContainer}
              data={TabBarList}
              renderItem={renderTabItem}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </LinearGradient>
      </BlurView>
    </SafeAreaView>
  );
};

const absoluteStyle = {
  position: 'absolute',
  height: styleConfig.smartScale(50),
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  borderRadius: styleConfig.countPixelRatio(17),
} as ViewStyle;

const styles = StyleSheet.create({
  saContainer: {
    backgroundColor: colors.white,
    borderRadius: styleConfig.countPixelRatio(17),
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

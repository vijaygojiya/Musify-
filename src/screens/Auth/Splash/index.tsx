import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

import colors from '../../../utils/colors';
import {Routes} from '../../../navigators/routes';
import {Layout} from '../../../theme';
import {Colors} from '../../../theme/Variables';
import {CommonActions} from '@react-navigation/native';

type SplashScreenProps = {
  navigation: any;
};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      redirection();
    }, 1000);
    () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const redirection = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: Routes.Dashboard}],
      }),
    );
  };

  return (
    <View style={[Layout.fill, Layout.justifyContentCenter, styles.container]}>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        style={[Layout.selfCenter, styles.textStyle]}>
        Musify
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark_blue,
  },
  textStyle: {
    fontSize: 24,
    letterSpacing: 5,
    color: Colors.white,
  },
});

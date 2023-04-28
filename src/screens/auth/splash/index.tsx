import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {routes} from '../../../router/routes';
import styleConfig from '../../../utils/styleConfig';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import GS from '../../../utils/styles';
import colors from '../../../utils/colors';

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
    navigation.replace(routes.Dashboard);
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        style={[GS.text_white_regular, styles.textStyle]}>
        VM GOJIYA
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.dark_blue,
  },
  textStyle: {
    fontSize: styleConfig.countPixelRatio(24),
    alignSelf: 'center',
    fontFamily: styleConfig.headingFontRegular,
    letterSpacing: styleConfig.countPixelRatio(5),
  },
});

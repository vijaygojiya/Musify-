import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {routes} from '../../../router/routes';
import styleConfig from '../../../utils/styleConfig';
import CommonGradientBg from '../../../component/custom/commonGradientBg';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import GS from '../../../utils/styles';

type SplashScreenProps = {
  navigation: any;
};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      redirection();
    }, 2000);
    () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const redirection = () => {
    navigation.replace(routes.Dashboard);
  };

  return (
    <CommonGradientBg containerStyle={styles.container}>
      <Animated.Text
        entering={FadeIn}
        exiting={FadeOut}
        style={[GS.text_white_regular, styles.textStyle]}>
        VM GOJIYA
      </Animated.Text>
    </CommonGradientBg>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: styleConfig.countPixelRatio(24),
    alignSelf: 'center',
    letterSpacing: styleConfig.countPixelRatio(5),
  },
});

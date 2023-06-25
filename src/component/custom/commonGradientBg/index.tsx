import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';

const CommonGradientBg: React.FC<{
  children: Element;
  containerStyle?: StyleProp<ViewStyle>;
}> = ({children, containerStyle}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={[styles.container, containerStyle]}
        colors={[colors.transparent, colors.tertiary]}
        start={{x: 0, y: 0}}
        end={{x: 9, y: 10}}>
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CommonGradientBg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBg,
  },
});

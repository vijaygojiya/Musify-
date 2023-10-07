import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import colors from '../utils/colors';
import {screenWidth} from '../theme/Variables';
import {Layout} from '../theme';

const ItemTab: React.FC<{
  item: any;
  index: number;
  isSelected: boolean;
  onTabClickListener: (index: number) => void;
}> = ({item, index, isSelected, onTabClickListener}) => {
  const bounceValue = useSharedValue(1);
  const bounce = () => {
    bounceValue.value = 0.9;
    bounceValue.value = withSpring(1);
  };
  const progress = useDerivedValue(() => {
    return withTiming(isSelected ? 1 : 0);
  });

  const animatedStyle = useAnimatedStyle(() => {
    const tintColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.white50, colors.tertiary],
    );
    return {
      tintColor: tintColor,
      transform: [
        {
          scale: bounceValue.value,
        },
      ],
    };
  });
  return (
    <Pressable
      accessibilityLabel={`Tab-${index}`}
      style={[Layout.center, styles.toTabContainer]}
      onPress={() => {
        onTabClickListener(index);
        bounce();
      }}>
      <Animated.Image
        style={[styles.iIcon, animatedStyle]}
        source={item.Icon}
        resizeMode="cover"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toTabContainer: {
    width: screenWidth / 5,
    paddingBottom: 10,
    paddingTop: 15,
  },
  iIcon: {
    width: 24,
    height: 24,
  },
});
export default ItemTab;

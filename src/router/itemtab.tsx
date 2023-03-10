import React, { useRef } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import colors from '../utils/colors';
import styleConfig from '../utils/styleConfig';

const ItemTab: React.FC<{
  item: any;
  index: number;
  isSelected: boolean;
  onTabClickListener: (index: number) => void;
}> = ({ item, index, isSelected, onTabClickListener }) => {
  const bounceValue = useSharedValue(1);
  const bounce = () => {
    bounceValue.value = 0.9;
    bounceValue.value = withSpring(1);
  };
  const progress = useDerivedValue(() => {
    return withTiming(isSelected ? 1 : 0);
  });

  const animatedStyle = useAnimatedStyle(() => {
    const tintColor = interpolateColor(progress.value, [0, 1], [colors.white50, colors.tertiary]);
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
      style={styles.toTabContainer}
      onPress={() => {
        onTabClickListener(index);
        bounce();
      }}
    >
      <Animated.Image style={[styles.iIcon, animatedStyle]} source={item.Icon} resizeMode="cover" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toTabContainer: {
    width: styleConfig.width / 5,
    paddingBottom: styleConfig.smartScale(10),
    paddingTop: styleConfig.smartScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iIcon: {
    width: styleConfig.countPixelRatio(24),
    height: styleConfig.countPixelRatio(24),
  },
});
export default ItemTab;

import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import colors from '../utils/colors';
import styleConfig from '../utils/styleConfig';

const ItemTab: React.FC<{
  item: any;
  index: number;
  isSelected: boolean;
  onTabClickListener: (index: number) => void;
}> = ({ item, index, isSelected, onTabClickListener }) => {
  const bounceValue = useRef(new Animated.Value(1)).current;
  const bounce = () => {
    bounceValue.setValue(0.83);
    Animated.timing(bounceValue, {
      toValue: 1,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Pressable
      accessibilityLabel={`Tab-${index}`}
      style={styles.toTabContainer}
      onPress={() => {
        onTabClickListener(index);
        bounce();
      }}
    >
      <Animated.Image
        style={[
          styles.iIcon,
          { tintColor: isSelected ? colors.secondary : colors.darkGrey },
          { transform: [{ scale: bounceValue }] },
        ]}
        source={item.Icon}
        resizeMode="cover"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toTabContainer: {
    width: styleConfig.width / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iIcon: {
    width: styleConfig.countPixelRatio(24),
    height: styleConfig.countPixelRatio(24),
  },
});
export default ItemTab;

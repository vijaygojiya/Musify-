import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import colors from '../utils/colors';
import styleConfig from '../utils/styleConfig';

const ItemTab: React.FC<{
  item: any;
  index: number;
  isSelected: boolean;
  onTabClickListener: (index: number) => void;
}> = ({item, index, isSelected, onTabClickListener}) => {
  return (
    <Pressable
      accessibilityLabel={`Tab-${index}`}
      style={styles.toTabContainer}
      onPress={() => {
        onTabClickListener(index);
      }}>
      <Image
        style={[
          styles.iIcon,
          {tintColor: isSelected ? colors.secondary : colors.darkGrey},
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

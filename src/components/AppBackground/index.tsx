import {StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface AppBackgroundProps {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}
const AppBackground: React.FC<AppBackgroundProps> = ({
  children,
  containerStyle = {},
}) => {
  return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
};

export default AppBackground;

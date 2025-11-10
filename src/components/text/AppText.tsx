import React from 'react';
import { Text, TextProps } from 'react-native';
import { useAppTextStyle } from './AppTextStyle';
import { ThemeColors } from '../../interface/colors.interface';

interface props extends TextProps {
  size?: number;
  fontFamily?: any;
  required?: boolean;
  color?: keyof ThemeColors;
  type?: 'error' | 'normal';
}

const AppText = ({
  size,
  style,
  color,
  children,
  type = 'normal',
  fontFamily = 'regular',
  required,
  ...props
}: props) => {
  const family = fontFamily;
  const styles = useAppTextStyle({
    style: {
      fontFamily: family,
    },
    size,
    color,
    type,
  });
  return (
    <Text allowFontScaling={false} style={[styles.container, style]} {...props}>
      {children}
      {required && <Text style={styles.require}>*</Text>}
    </Text>
  );
};

export default AppText;

import React from 'react';
import { useAppTextStyle } from './AppTextStyle';
import { ColorValue, Text, TextProps } from 'react-native';

interface props extends TextProps {
  size?: number;
  fontFamily?: any;
  required?: boolean;
  color?: ColorValue;
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

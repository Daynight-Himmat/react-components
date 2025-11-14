import { useMemo } from 'react';
import { LIGHT_COLORS } from '../../style';
import { ColorValue, StyleSheet, TextStyle } from 'react-native';

interface props {
  size?: number;
  style?: TextStyle;
  color?: ColorValue;
  type?: 'error' | 'normal';
}

export const useAppTextStyle = ({
  size,
  style,
  color,
  type = 'normal',
}: props) => {
  const { ...colors } = LIGHT_COLORS;

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        fontSize: size || 14,
        color: type === 'error' ? colors.error : color ? color : colors.primary,
        ...style,
      },
      require: {
        color: colors.error,
      },
    });
  }, [size, colors, style, type, color]);

  return styles;
};

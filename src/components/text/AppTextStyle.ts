import { useMemo } from 'react';
import { LIGHT_COLORS } from '../../style';
import { StyleSheet, TextStyle } from 'react-native';
import { ThemeColors } from '../../interface/colors.interface';

interface props {
  size?: number;
  style?: TextStyle;
  color?: keyof ThemeColors;
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
        color:
          type === 'error'
            ? colors.error
            : color
            ? colors[color]
            : colors.primary,
        ...style,
      },
      require: {
        color: colors.error,
      },
    });
  }, [size, colors, style, type, color]);

  return styles;
};

import React from 'react';
import Svg from '../../assets/svg';
import { useSvgButtonStyle } from './SvgButtonStyle';
import { ThemeColors } from '../../interface/colors.interface';
import { Pressable, StyleProp, ViewStyle, PressableProps } from 'react-native';

interface Props {
  size?: number;
  isFab?: boolean;
  onPress?: () => void;
  icon?: React.JSX.Element;
  style?: StyleProp<ViewStyle>;
  iconColor?: keyof ThemeColors;
  pressableProps?: PressableProps;
}

const SvgButton = React.memo(
  ({
    icon,
    style,
    onPress,
    size = 18,
    isFab = false,
    pressableProps,
    iconColor = 'black',
  }: Props) => {
    const { styles, colors } = useSvgButtonStyle();
    const fill = colors[iconColor] || colors?.gray;
    const styleProp = isFab ? [styles?.favIcon, style] : style;
    const SvgIcon = icon;

    return (
      <Pressable
        hitSlop={10}
        style={styleProp}
        onPress={onPress}
        {...pressableProps}
      >
        {icon && icon} 
      </Pressable>
    );
  },
);

export default SvgButton;

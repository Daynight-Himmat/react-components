import React from 'react';
import { useSvgButtonStyle } from './SvgButtonStyle';
import { Pressable, StyleProp, ViewStyle, PressableProps } from 'react-native';

interface Props {
  isFab?: boolean;
  onPress?: () => void;
  icon?: React.JSX.Element;
  style?: StyleProp<ViewStyle>;
  pressableProps?: PressableProps;
}

const SvgButton = React.memo(
  ({
    icon,
    style,
    onPress,
    isFab = false,
    pressableProps,
  }: Props) => {
    const { styles } = useSvgButtonStyle();
    const styleProp = isFab ? [styles?.favIcon, style] : style;

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

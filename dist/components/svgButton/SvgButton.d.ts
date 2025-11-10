import React from 'react';
import Svg from '../../assets/svg';
import { ThemeColors } from '../../interface/colors.interface';
import { StyleProp, ViewStyle, PressableProps } from 'react-native';
interface Props {
    size?: number;
    isFab?: boolean;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    iconColor?: keyof ThemeColors;
    pressableProps?: PressableProps;
    icon?: keyof typeof Svg | React.JSX.Element;
}
declare const SvgButton: React.MemoExoticComponent<({ icon, style, onPress, size, isFab, pressableProps, iconColor, }: Props) => React.JSX.Element>;
export default SvgButton;

import React from 'react';
import { StyleProp, ViewStyle, PressableProps } from 'react-native';
interface Props {
    isFab?: boolean;
    onPress?: () => void;
    icon?: React.JSX.Element;
    style?: StyleProp<ViewStyle>;
    pressableProps?: PressableProps;
}
declare const SvgButton: React.MemoExoticComponent<({ icon, style, onPress, isFab, pressableProps, }: Props) => React.JSX.Element>;
export default SvgButton;

import { StyleProp, TextStyle, ViewStyle, TextInputProps } from 'react-native';
import SvgIcon from '../../assets/svg';
import React from 'react';
export interface AppTextProps extends TextInputProps {
    label?: string;
    inputRef?: any;
    required?: boolean;
    error?: string | undefined;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;
    leftIconStyle?: StyleProp<ViewStyle>;
    rightIconStyle?: StyleProp<ViewStyle>;
    icon?: keyof typeof SvgIcon | React.JSX.Element;
    leftIcon?: keyof typeof SvgIcon | React.JSX.Element;
    onIconPress?: () => Promise<void> | undefined | void;
    type?: 'password' | 'number' | 'email' | 'phone' | 'text';
    autoCapitalize?: 'characters' | 'words' | 'sentences' | 'none';
}
declare const AppTextInput: ({ icon, type, error, label, style, value, onBlur, onFocus, required, leftIcon, inputRef, textStyle, onPressIn, labelStyle, placeholder, onIconPress, autoCorrect, onChangeText, leftIconStyle, rightIconStyle, textContentType, placeholderTextColor, ...rest }: AppTextProps) => React.JSX.Element;
export default AppTextInput;

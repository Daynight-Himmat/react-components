import { StyleProp, TextStyle, ViewStyle, TextInputProps } from 'react-native';
import React from 'react';
export interface AppTextProps extends TextInputProps {
    label?: string;
    inputRef?: any;
    required?: boolean;
    icon?: React.JSX.Element;
    error?: string | undefined;
    leftIcon?: React.JSX.Element;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;
    leftIconStyle?: StyleProp<ViewStyle>;
    rightIconStyle?: StyleProp<ViewStyle>;
    onIconPress?: () => Promise<void> | undefined | void;
    type?: 'password' | 'number' | 'email' | 'phone' | 'text';
    autoCapitalize?: 'characters' | 'words' | 'sentences' | 'none';
}
declare const AppTextInput: ({ icon, type, error, label, style, value, onBlur, onFocus, required, leftIcon, inputRef, textStyle, onPressIn, labelStyle, placeholder, onIconPress, autoCorrect, onChangeText, leftIconStyle, rightIconStyle, textContentType, placeholderTextColor, ...rest }: AppTextProps) => React.JSX.Element;
export default AppTextInput;

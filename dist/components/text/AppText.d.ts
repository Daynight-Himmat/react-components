import React from 'react';
import { ColorValue, TextProps } from 'react-native';
interface props extends TextProps {
    size?: number;
    fontFamily?: any;
    required?: boolean;
    color?: ColorValue;
    type?: 'error' | 'normal';
}
declare const AppText: ({ size, style, color, children, type, fontFamily, required, ...props }: props) => React.JSX.Element;
export default AppText;

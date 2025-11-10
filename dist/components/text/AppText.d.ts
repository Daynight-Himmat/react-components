import React from 'react';
import { TextProps } from 'react-native';
import { ThemeColors } from '../../interface/colors.interface';
interface props extends TextProps {
    size?: number;
    fontFamily?: any;
    required?: boolean;
    color?: keyof ThemeColors;
    type?: 'error' | 'normal';
}
declare const AppText: ({ size, style, color, children, type, fontFamily, required, ...props }: props) => React.JSX.Element;
export default AppText;

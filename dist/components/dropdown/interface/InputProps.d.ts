import type React from 'react';
import type { StyleProp, ViewStyle, TextInputProps } from 'react-native';
interface Props extends TextInputProps {
    style?: StyleProp<ViewStyle>;
}
export type CTextInput = React.FC<Props>;
export {};

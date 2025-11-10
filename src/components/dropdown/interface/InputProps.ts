import type React from 'react';
import type { StyleProp, ViewStyle, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  searchIcon?: React.JSX.Element;
}

export type CTextInput = React.FC<Props>;

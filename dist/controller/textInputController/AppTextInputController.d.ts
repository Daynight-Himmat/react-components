import React from 'react';
import { AppTextProps } from '../../components/textInput/AppTextInput';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Control, FieldValues, Path } from 'react-hook-form';
interface Props<T extends FieldValues> extends AppTextProps {
    textStyle?: TextStyle;
    controllerName: Path<T>;
    containerStyle?: ViewStyle;
    control: Control<T> | undefined;
    labelStyle?: StyleProp<TextStyle>;
}
declare const AppTextControlInput: <T extends FieldValues>({ control, textStyle, labelStyle, controllerName, containerStyle, ...rest }: Props<T>) => React.JSX.Element;
export default AppTextControlInput;

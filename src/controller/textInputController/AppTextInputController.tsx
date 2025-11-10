import React from 'react';
import AppTextInput, {
  AppTextProps,
} from '../../components/textInput/AppTextInput';
import { useInputController } from './InputControllerStyle';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues> extends AppTextProps {
  textStyle?: TextStyle;
  controllerName: Path<T>;
  containerStyle?: ViewStyle;
  control: Control<T> | undefined;
  labelStyle?: StyleProp<TextStyle>;
}

const AppTextControlInput = <T extends FieldValues>({
  control,
  textStyle,
  labelStyle,
  controllerName,
  containerStyle,
  ...rest
}: Props<T>) => {
  const { styles } = useInputController();

  return (
    <Controller
      control={control}
      name={controllerName}
      render={({
        fieldState: { error },
        field: { onChange, value, onBlur },
      }) => (
        <AppTextInput
          value={value}
          onBlur={onBlur}
          error={error?.message}
          onChangeText={onChange}
          textStyle={[styles.inputText, textStyle]}
          labelStyle={[styles.labelText, labelStyle]}
          style={[styles.inputControlContainer, containerStyle]}
          {...rest}
        />
      )}
    />
  );
};

export default AppTextControlInput;

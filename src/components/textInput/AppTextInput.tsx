import {
  View,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import svg from '../../assets/svg';
import AppText from '../text/AppText';
import SvgIcon from '../../assets/svg';
import SvgButton from '../svgButton/SvgButton';
import React, { useCallback, useState } from 'react';
import { useAppTextInputStyle } from './AppTextInputStyle';

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

const AppTextInput = ({
  icon,
  type,
  error,
  label,
  style,
  value,
  onBlur,
  onFocus,
  required,
  leftIcon,
  inputRef,
  textStyle,
  onPressIn,
  labelStyle,
  placeholder,
  onIconPress,
  autoCorrect,
  onChangeText,
  leftIconStyle,
  rightIconStyle,
  textContentType,
  placeholderTextColor,
  ...rest
}: AppTextProps) => {
  const { styles, colors } = useAppTextInputStyle({
    type,
    leftIcon,
    editable: rest?.editable,
  });
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    type === 'password',
  );

  const handlePasswordIcon = () => {
    setSecureTextEntry(prev => !prev);
  };

  const getKeyboardType = () => {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'number':
        return 'numeric';
      case 'phone':
        return 'phone-pad';
      default:
        return 'default';
    }
  };

  const renderIcon = useCallback(
    (
      rightIcon?: React.JSX.Element,
      onPress?: () => void,
    ) => (
      <SvgButton
        size={18}
        icon={rightIcon}
        onPress={onPress}
        iconColor={'gray'}
        style={[styles.rightIcon, rightIconStyle]}
      />
    ),
    [styles, rightIconStyle],
  );

  return (
    <>
      {label ? (
        <AppText style={[styles.label, labelStyle]}>
          {label}
          {required ? (
            <AppText style={[styles.label, styles.required]}>*</AppText>
          ) : null}
        </AppText>
      ) : null}
      <View style={styles.margin}>
        <View
          style={[styles.container, style, error ? styles.errorWrapper : {}]}
        >
          {leftIcon ? (
            <SvgButton
              size={18}
              icon={leftIcon}
              iconColor={'gray'}
              style={[styles.leftIcon, leftIconStyle]}
            />
          ) : null}
          <TextInput
            value={value}
            ref={inputRef}
            onBlur={onBlur}
            onPressIn={onPressIn}
            allowFontScaling={false}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            onChangeText={onChangeText}
            keyboardType={getKeyboardType()}
            textContentType={textContentType}
            secureTextEntry={secureTextEntry}
            style={[styles.textInputStyles, textStyle]}
            placeholderTextColor={placeholderTextColor || colors.gray}
            onFocus={e => {
              if (onFocus) {
                onFocus(e);
              }
            }}
            {...rest}
          />
          {type === 'password'
            ? renderIcon(icon, handlePasswordIcon)
            : null}
          {icon && type !== 'password' ? renderIcon(icon, onIconPress) : null}
        </View>
        {error && <AppText style={styles.error}>{error}</AppText>}
      </View>
    </>
  );
};

export default AppTextInput;

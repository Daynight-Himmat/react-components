import { useTextStyle } from './TextInputStyle';
import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import AppTextInput from '../../../textInput/AppTextInput';
import type { CTextInput } from '../../interface/InputProps';

const TextInputComponent: CTextInput = props => {
  const {
    value,
    placeholder = '',
    placeholderTextColor = '#000',
    onChangeText = (_value: string) => {},
    searchIcon,
  } = props;

  const [searchtext, setSearchText] = useState<string>('');
  const { styles } = useTextStyle();

  useEffect(() => {
    if (value) {
      setSearchText(value);
    }
  }, [value]);

  const onChange = (text: string) => {
    setSearchText(text);
    onChangeText(text);
  };

  return (
    <TouchableWithoutFeedback>
      <AppTextInput
        {...props}
        value={searchtext}
        icon={searchIcon}
        style={styles.input}
        onChangeText={onChange}
        placeholder={placeholder}
        textStyle={styles.inputContainer}
        placeholderTextColor={placeholderTextColor}
      />
    </TouchableWithoutFeedback>
  );
};

export default TextInputComponent;

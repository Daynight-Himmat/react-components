import { useTextStyle } from './TextInputStyle';
import React, { useEffect, useState } from 'react';
import { SearchIcon } from '../../../../assets/svg';
import { TouchableWithoutFeedback } from 'react-native';
import AppTextInput from '../../../textInput/AppTextInput';
const TextInputComponent = props => {
    const { value, placeholder = '', placeholderTextColor = '#000', onChangeText = (_value) => { }, searchIcon, } = props;
    const [searchtext, setSearchText] = useState('');
    const { styles } = useTextStyle();
    useEffect(() => {
        if (value) {
            setSearchText(value);
        }
    }, [value]);
    const onChange = (text) => {
        setSearchText(text);
        onChangeText(text);
    };
    return (<TouchableWithoutFeedback>
      <AppTextInput {...props} value={searchtext} style={styles.input} onChangeText={onChange} placeholder={placeholder} textStyle={styles.inputContainer} placeholderTextColor={placeholderTextColor} icon={searchIcon ? searchIcon : <SearchIcon />}/>
    </TouchableWithoutFeedback>);
};
export default TextInputComponent;

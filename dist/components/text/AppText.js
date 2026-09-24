import React from 'react';
import { useAppTextStyle } from './AppTextStyle';
import { Text } from 'react-native';
const AppText = ({ size, style, color, children, type = 'normal', fontFamily = 'regular', required, ...props }) => {
    const family = fontFamily;
    const styles = useAppTextStyle({
        size,
        color,
        type,
    });
    return (<Text allowFontScaling={false} style={[styles.container, style]} {...props}>
      {children}
      {required && <Text style={styles.require}>*</Text>}
    </Text>);
};
export default AppText;

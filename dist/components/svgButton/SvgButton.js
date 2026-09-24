import React from 'react';
import { useSvgButtonStyle } from './SvgButtonStyle';
import { Pressable } from 'react-native';
const SvgButton = React.memo(({ icon, style, onPress, isFab = false, pressableProps, }) => {
    const { styles } = useSvgButtonStyle();
    const styleProp = isFab ? [styles?.favIcon, style] : style;
    return (<Pressable hitSlop={10} style={styleProp} onPress={onPress} {...pressableProps}>
        {icon && icon} 
      </Pressable>);
});
export default SvgButton;

import { useMemo } from 'react';
import { LIGHT_COLORS } from '../../style';
import { StyleSheet } from 'react-native';
export const useAppTextStyle = ({ size, color, type = 'normal', }) => {
    const { ...colors } = LIGHT_COLORS;
    const styles = useMemo(() => {
        return StyleSheet.create({
            container: {
                fontSize: size || 14,
                color: type === 'error' ? colors.error : color ? color : colors.primary,
            },
            require: {
                color: colors.error,
            },
        });
    }, [size, colors, type, color]);
    return styles;
};

import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { LIGHT_COLORS } from '../../../../style';

export const useTextStyle = () => {
  const { ...colors } = LIGHT_COLORS;

  const styles = useMemo(() => {
    return StyleSheet.create({
      input: {
        height: 40,
        width: '95%',
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 3,
        marginVertical: 10,
        marginHorizontal: 8,
        borderColor: colors.border,
      },
      inputContainer: {
        width: '90%',
        fontSize: 14,
        color: colors.gray,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};

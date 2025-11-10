import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { LIGHT_COLORS, SPACING } from '../../style';

export const useInputController = () => {
  const { ...colors } = LIGHT_COLORS;

  const styles = useMemo(() => {
    return StyleSheet.create({
      labelText: {
        color: colors.gray,
      },
      inputControlContainer: {
        height: 48,
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        marginVertical: SPACING.s2,
        borderColor: colors.border,
      },
      inputText: {
        color: colors.black,
      },
    });
  }, [colors]);

  return { styles, colors };
};

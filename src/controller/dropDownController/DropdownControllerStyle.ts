import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { LIGHT_COLORS, SPACING } from '../../style';

export const useDropdownControllerStyle = () => {
  const { ...colors } = LIGHT_COLORS;

  const styles = useMemo(() => {
    return StyleSheet.create({
      mainContainer: {
        width: '100%',
        marginBottom: SPACING?.s4,
      },
      dropdownContainer: {
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: SPACING.s10,
        borderColor: colors.border,
        paddingHorizontal: SPACING.s10,
      },
      labelText: {
        color: colors.gray,
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: colors.red,
      },
      dropdownText: {
        fontSize: 14,
        color: colors.gray,
      },
      itemContainer: {
        fontSize: 14,
        color: colors.gray,
      },
      selectionText: {
        fontSize: 14,
        color: colors.gray,
      },
      error: {
        color: colors.red,
      },
    });
  }, [colors]);

  return { styles, colors };
};

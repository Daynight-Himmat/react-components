import { useMemo } from 'react';
import { LIGHT_COLORS } from '../../../../style';
import { Platform, StyleSheet } from 'react-native';
import { ChipInterface } from '../../interface/ChipInterface';

const useChipStyle = (props: ChipInterface) => {
  const { chipColor, textColor } = props;
  const { ...colors } = LIGHT_COLORS;
  const styles = useMemo(() => {
    return StyleSheet.create({
      box: {
        margin: 4,
        height: 26,
        ...Platform.select({
          android: {
            elevation: 5,
          },
          ios: {
            shadowRadius: 1.84,
            shadowOpacity: 0.35,
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 2 },
          },
        }),
        elevation: 5,
        width: 'auto',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: chipColor ? colors[chipColor] : colors.lightGray,
      },
      chipText: {
        paddingLeft: 10,
        fontWeight: '600',
      },
      clearContainer: {
        width: 18,
        height: 18,
        borderWidth: 2,
        borderRadius: 100,
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: textColor ? colors[textColor] : colors.white,
        backgroundColor: chipColor ? colors[chipColor] : colors.lightGray,
      },
      clearIcon: {
        width: 12,
        height: 12,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  }, [chipColor, colors, textColor]);
  return {
    styles,
    colors,
  };
};

export default useChipStyle;

import { useMemo } from 'react';
import { LIGHT_COLORS } from '../../../../style';
import { Platform, StyleSheet } from 'react-native';
import { ChipInterface } from '../../interface/ChipInterface';

const useChipStyle = (props: ChipInterface) => {
  const { chipColor } = props;
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
            shadowOpacity: 0.25,
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
        borderWidth: 1,
        borderRadius: 100,
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.white,
        backgroundColor: chipColor ? colors[chipColor] : colors.lightGray,
      },
      clearIcon: {
        height: 12,
        width: 12,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  }, [chipColor, colors]);
  return {
    styles,
    colors,
  };
};

export default useChipStyle;

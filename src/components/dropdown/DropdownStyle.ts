import { useMemo } from 'react';
import { I18nManager, StyleSheet } from 'react-native';
import { useDeviceOrientation } from './hooks/useOrientation';
import { ThemeColors } from '../../interface/colors.interface';
import {
  DEFAULT_COLORS,
  SCREEN_WIDTH,
  SPACING,
  LIGHT_COLORS,
} from '../../style';

interface Props {
  size?: number;
  radioIconColor?: keyof ThemeColors;
  checkIconColor?: keyof ThemeColors;
}

export const useDropdownStyle = (props: Props) => {
  const { ...colors } = LIGHT_COLORS;
  const orientation = useDeviceOrientation();
  const { size = 16, radioIconColor, checkIconColor } = props;

  const styles = useMemo(() => {
    return StyleSheet.create({
      mainContainer: {
        width: '100%',
      },
      mainWrap: {
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 6,
        justifyContent: 'center',
        borderColor: colors.lightGray,
      },
      container: {
        flexShrink: 1,
        borderWidth: 0.5,
        borderColor: '#EEEEEE',
        shadowColor: colors.black,
        backgroundColor: colors.white,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        elevation: 2,
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
      },
      flex1: {
        flex: 1,
      },
      flexShrink: {
        flexShrink: 1,
      },
      wrapTop: {
        justifyContent: 'flex-end',
      },
      dropdown: {
        minHeight: 48,
        maxHeight: 170,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      },
      title: {
        fontSize: 16,
        color: colors.gray,
        marginVertical: SPACING.s6,
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
      },
      item: {
        padding: 17,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: colors.lightGray,
        justifyContent: 'space-between',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      },
      textItem: {
        flex: 1,
        fontSize: 16,
        color: colors.gray,
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
      },
      icon: {
        width: 20,
        height: 20,
      },
      input: {
        margin: 6,
        height: 45,
        borderWidth: 0.5,
        borderColor: '#DDDDDD',
        marginBottom: SPACING.s8,
        paddingHorizontal: SPACING.s8,
      },
      fullScreen: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      labelContainer: {
        marginBottom: SPACING.s6,
        paddingVertical: SPACING.s6,
      },
      labelTextStyle: {
        color: colors.gray,
      },
      itemIconContainer: {
        borderWidth: 2,
        marginRight: 10,
        borderRadius: 100,
        width: size || 24,
        height: size || 24,
        alignItems: 'center',
        justifyContent: 'center',
        padding: (size || 24) / 8,
        borderColor: radioIconColor || colors.gray,
      },
      iconSubContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        backgroundColor: radioIconColor || colors.gray,
      },
      styleHorizontal: {
        width: orientation === 'LANDSCAPE' ? SCREEN_WIDTH / 2 : '100%',
        alignSelf: 'center',
      },
      styleContainerVertical: {
        alignItems: 'center',
        backgroundColor: DEFAULT_COLORS.blackOpacity,
      },
      checkContainer: {
        borderWidth: 2,
        borderRadius: 2,
        marginRight: 10,
        width: size || 16,
        height: size || 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: checkIconColor ? checkIconColor : colors.gray,
      },
      showMultiSelectContainer: {
        width: '90%',
        height: 'auto',
        maxHeight: 200,
      },
      wraps: {
        flexWrap: 'wrap',
        paddingVertical: 6,
        flexDirection: 'row',
        paddingHorizontal: 10,
      },
    });
  }, [size, colors, orientation, radioIconColor, checkIconColor]);

  return {
    styles,
    colors,
  };
};

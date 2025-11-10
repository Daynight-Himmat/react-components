
import { ReactNode, useMemo } from 'react';
import { PressableStateCallbackType, StyleSheet } from 'react-native';
import { DEFAULT_COLORS, LIGHT_COLORS, SHADOW, SPACING } from '../../style';

interface props {
  type?: any;
  editable?: boolean;
  leftIcon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  rightIcon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
}

export const useAppTextInputStyle = ({
  type,
  leftIcon,
  editable = true,
}: props) => {
  const { ...colors } = LIGHT_COLORS;

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
        ...SHADOW.shadow1,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: !editable ? 0.5 : 1,
        backgroundColor: DEFAULT_COLORS.white,
      },
      margin: {
        marginBottom: SPACING.s10,
      },
      rightIcon: {
        position: 'absolute',
        right: SPACING.s20,
      },
      error: {
        textAlign: 'left',
        paddingTop: SPACING.s4,
        alignSelf: 'flex-start',
        color: colors.red,
      },
      label: {
        color: colors.primary,
        marginBottom: SPACING.s12,
        alignSelf: 'flex-start',
        marginTop: SPACING.s10,
      },
      required: {
        color: colors.red,
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: colors.red,
      },
      textInputStyles: {
        padding: 0,
        height: 48,
        width: '100%',
        color: colors.primary,
        paddingLeft: leftIcon ? SPACING.s45 : 16,
        paddingRight: type === 'password' ? 50 : 16,
      },
      leftIcon: {
        position: 'absolute',
        left: SPACING.s14,
      },
    });
  }, [editable, colors, leftIcon, type]);

  return { styles, colors };
};

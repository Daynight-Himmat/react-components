"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppTextInputStyle = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const style_1 = require("../../style");
const useAppTextInputStyle = ({ type, leftIcon, editable = true, }) => {
    const { ...colors } = style_1.LIGHT_COLORS;
    const styles = (0, react_1.useMemo)(() => {
        return react_native_1.StyleSheet.create({
            container: {
                width: '100%',
                ...style_1.SHADOW.shadow1,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: !editable ? 0.5 : 1,
                backgroundColor: style_1.DEFAULT_COLORS.white,
            },
            margin: {
                marginBottom: style_1.SPACING.s10,
            },
            rightIcon: {
                position: 'absolute',
                right: style_1.SPACING.s20,
            },
            error: {
                textAlign: 'left',
                paddingTop: style_1.SPACING.s4,
                alignSelf: 'flex-start',
                color: colors.red,
            },
            label: {
                color: colors.primary,
                marginBottom: style_1.SPACING.s12,
                alignSelf: 'flex-start',
                marginTop: style_1.SPACING.s10,
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
                paddingLeft: leftIcon ? style_1.SPACING.s45 : 16,
                paddingRight: type === 'password' ? 50 : 16,
            },
            leftIcon: {
                position: 'absolute',
                left: style_1.SPACING.s14,
            },
        });
    }, [editable, colors, leftIcon, type]);
    return { styles, colors };
};
exports.useAppTextInputStyle = useAppTextInputStyle;

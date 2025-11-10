"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDropdownControllerStyle = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const style_1 = require("../../style");
const useDropdownControllerStyle = () => {
    const { ...colors } = style_1.LIGHT_COLORS;
    const styles = (0, react_1.useMemo)(() => {
        return react_native_1.StyleSheet.create({
            mainContainer: {
                width: '100%',
                marginBottom: style_1.SPACING?.s4,
            },
            dropdownContainer: {
                borderWidth: 1,
                borderRadius: 6,
                marginBottom: style_1.SPACING.s10,
                borderColor: colors.border,
                paddingHorizontal: style_1.SPACING.s10,
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
exports.useDropdownControllerStyle = useDropdownControllerStyle;

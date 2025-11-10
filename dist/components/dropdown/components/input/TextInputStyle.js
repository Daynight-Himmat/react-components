"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTextStyle = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const style_1 = require("../../../../style");
const useTextStyle = () => {
    const { ...colors } = style_1.LIGHT_COLORS;
    const styles = (0, react_1.useMemo)(() => {
        return react_native_1.StyleSheet.create({
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
exports.useTextStyle = useTextStyle;

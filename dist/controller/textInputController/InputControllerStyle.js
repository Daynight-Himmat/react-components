"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInputController = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const style_1 = require("../../style");
const useInputController = () => {
    const { ...colors } = style_1.LIGHT_COLORS;
    const styles = (0, react_1.useMemo)(() => {
        return react_native_1.StyleSheet.create({
            labelText: {
                color: colors.gray,
            },
            inputControlContainer: {
                height: 48,
                borderWidth: 1,
                borderRadius: 6,
                alignItems: 'center',
                marginVertical: style_1.SPACING.s2,
                borderColor: colors.border,
            },
            inputText: {
                color: colors.black,
            },
        });
    }, [colors]);
    return { styles, colors };
};
exports.useInputController = useInputController;

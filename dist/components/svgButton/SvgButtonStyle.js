"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSvgButtonStyle = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const style_1 = require("../../style");
const useSvgButtonStyle = () => {
    const { ...colors } = style_1.LIGHT_COLORS;
    const styles = (0, react_1.useMemo)(() => {
        return react_native_1.StyleSheet.create({
            favIcon: {
                width: 50,
                right: 25,
                height: 50,
                bottom: 25,
                borderRadius: 6,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.green,
            },
        });
    }, [colors]);
    return {
        styles,
        colors,
    };
};
exports.useSvgButtonStyle = useSvgButtonStyle;

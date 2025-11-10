"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppTextStyle = void 0;
const react_1 = require("react");
const style_1 = require("../../style");
const react_native_1 = require("react-native");
const useAppTextStyle = ({ size, style, color, type = 'normal', }) => {
    const { ...colors } = style_1.LIGHT_COLORS;
    const styles = (0, react_1.useMemo)(() => {
        return react_native_1.StyleSheet.create({
            container: {
                fontSize: size || 14,
                color: type === 'error'
                    ? colors.error
                    : color
                        ? colors[color]
                        : colors.primary,
                ...style,
            },
            require: {
                color: colors.error,
            },
        });
    }, [size, colors, style, type, color]);
    return styles;
};
exports.useAppTextStyle = useAppTextStyle;

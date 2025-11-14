"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AppTextStyle_1 = require("./AppTextStyle");
const react_native_1 = require("react-native");
const AppText = ({ size, style, color, children, type = 'normal', fontFamily = 'regular', required, ...props }) => {
    const family = fontFamily;
    const styles = (0, AppTextStyle_1.useAppTextStyle)({
        style: {
            fontFamily: family,
        },
        size,
        color,
        type,
    });
    return (<react_native_1.Text allowFontScaling={false} style={[styles.container, style]} {...props}>
      {children}
      {required && <react_native_1.Text style={styles.require}>*</react_native_1.Text>}
    </react_native_1.Text>);
};
exports.default = AppText;

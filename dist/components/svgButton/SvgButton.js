"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SvgButtonStyle_1 = require("./SvgButtonStyle");
const react_native_1 = require("react-native");
const SvgButton = react_1.default.memo(({ icon, style, onPress, isFab = false, pressableProps, }) => {
    const { styles } = (0, SvgButtonStyle_1.useSvgButtonStyle)();
    const styleProp = isFab ? [styles?.favIcon, style] : style;
    return (<react_native_1.Pressable hitSlop={10} style={styleProp} onPress={onPress} {...pressableProps}>
        {icon && icon} 
      </react_native_1.Pressable>);
});
exports.default = SvgButton;

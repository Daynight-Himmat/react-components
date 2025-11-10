"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const svg_1 = __importDefault(require("../../assets/svg"));
const SvgButtonStyle_1 = require("./SvgButtonStyle");
const react_native_1 = require("react-native");
const SvgButton = react_1.default.memo(({ icon, style, onPress, size = 18, isFab = false, pressableProps, iconColor = 'black', }) => {
    const { styles, colors } = (0, SvgButtonStyle_1.useSvgButtonStyle)();
    const fill = colors[iconColor] || colors?.gray;
    const styleProp = isFab ? [styles?.favIcon, style] : style;
    const SvgIcon = typeof icon === 'string' ? svg_1.default[icon] : null;
    return (<react_native_1.Pressable hitSlop={10} style={styleProp} onPress={onPress} {...pressableProps}>
        {typeof icon === 'string'
            ? SvgIcon && <SvgIcon width={size} height={size} fill={fill}/>
            : icon}
      </react_native_1.Pressable>);
});
exports.default = SvgButton;

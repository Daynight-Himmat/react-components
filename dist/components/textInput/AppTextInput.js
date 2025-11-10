"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const AppText_1 = __importDefault(require("../text/AppText"));
const SvgButton_1 = __importDefault(require("../svgButton/SvgButton"));
const react_1 = __importStar(require("react"));
const AppTextInputStyle_1 = require("./AppTextInputStyle");
const AppTextInput = ({ icon, type, error, label, style, value, onBlur, onFocus, required, leftIcon, inputRef, textStyle, onPressIn, labelStyle, placeholder, onIconPress, autoCorrect, onChangeText, leftIconStyle, rightIconStyle, textContentType, placeholderTextColor, ...rest }) => {
    const { styles, colors } = (0, AppTextInputStyle_1.useAppTextInputStyle)({
        type,
        leftIcon,
        editable: rest?.editable,
    });
    const [secureTextEntry, setSecureTextEntry] = (0, react_1.useState)(type === 'password');
    const handlePasswordIcon = () => {
        setSecureTextEntry(prev => !prev);
    };
    const getKeyboardType = () => {
        switch (type) {
            case 'email':
                return 'email-address';
            case 'number':
                return 'numeric';
            case 'phone':
                return 'phone-pad';
            default:
                return 'default';
        }
    };
    const SvgPassword = secureTextEntry ? 'eyeOnIcon' : 'eyeOffIcon';
    const renderIcon = (0, react_1.useCallback)((rightIcon, onPress) => (<SvgButton_1.default size={18} icon={rightIcon} onPress={onPress} iconColor={'gray'} style={[styles.rightIcon, rightIconStyle]}/>), [styles, rightIconStyle]);
    return (<>
      {label ? (<AppText_1.default style={[styles.label, labelStyle]}>
          {label}
          {required ? (<AppText_1.default style={[styles.label, styles.required]}>*</AppText_1.default>) : null}
        </AppText_1.default>) : null}
      <react_native_1.View style={styles.margin}>
        <react_native_1.View style={[styles.container, style, error ? styles.errorWrapper : {}]}>
          {leftIcon ? (<SvgButton_1.default size={18} icon={leftIcon} iconColor={'gray'} style={[styles.leftIcon, leftIconStyle]}/>) : null}
          <react_native_1.TextInput value={value} ref={inputRef} onBlur={onBlur} onPressIn={onPressIn} allowFontScaling={false} placeholder={placeholder} autoCorrect={autoCorrect} onChangeText={onChangeText} keyboardType={getKeyboardType()} textContentType={textContentType} secureTextEntry={secureTextEntry} style={[styles.textInputStyles, textStyle]} placeholderTextColor={placeholderTextColor || colors.gray} onFocus={e => {
            if (onFocus) {
                onFocus(e);
            }
        }} {...rest}/>
          {type === 'password'
            ? renderIcon(SvgPassword, handlePasswordIcon)
            : null}
          {icon && type !== 'password' ? renderIcon(icon, onIconPress) : null}
        </react_native_1.View>
        {error && <AppText_1.default style={styles.error}>{error}</AppText_1.default>}
      </react_native_1.View>
    </>);
};
exports.default = AppTextInput;

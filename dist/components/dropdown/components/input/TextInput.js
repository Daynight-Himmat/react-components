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
const TextInputStyle_1 = require("./TextInputStyle");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const AppTextInput_1 = __importDefault(require("../../../textInput/AppTextInput"));
const TextInputComponent = props => {
    const { value, placeholder = '', placeholderTextColor = '#000', onChangeText = (_value) => { }, searchIcon, } = props;
    const [searchtext, setSearchText] = (0, react_1.useState)('');
    const { styles } = (0, TextInputStyle_1.useTextStyle)();
    (0, react_1.useEffect)(() => {
        if (value) {
            setSearchText(value);
        }
    }, [value]);
    const onChange = (text) => {
        setSearchText(text);
        onChangeText(text);
    };
    return (<react_native_1.TouchableWithoutFeedback>
      <AppTextInput_1.default {...props} value={searchtext} icon={searchIcon} style={styles.input} onChangeText={onChange} placeholder={placeholder} textStyle={styles.inputContainer} placeholderTextColor={placeholderTextColor}/>
    </react_native_1.TouchableWithoutFeedback>);
};
exports.default = TextInputComponent;

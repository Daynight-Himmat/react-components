"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const ChipStyle_1 = __importDefault(require("./ChipStyle"));
const AppText_1 = __importDefault(require("../../../text/AppText"));
const SvgButton_1 = __importDefault(require("../../../svgButton/SvgButton"));
const Chip = (props) => {
    const { styles } = (0, ChipStyle_1.default)({ ...props });
    const { label, onClearPress, textColor, clearIcon } = props;
    return (<react_native_1.View style={styles.box}>
      <AppText_1.default size={12} fontFamily={'semiBold'} style={styles.chipText} color={textColor ? textColor : 'gray'}>
        {label}
      </AppText_1.default>
      <react_native_1.View style={styles.clearContainer}>
        <SvgButton_1.default icon={clearIcon} onPress={onClearPress} style={styles.clearIcon}/>
      </react_native_1.View>
    </react_native_1.View>);
};
exports.default = Chip;

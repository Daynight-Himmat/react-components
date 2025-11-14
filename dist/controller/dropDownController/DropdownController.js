"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const AppText_1 = __importDefault(require("../../components/text/AppText"));
const Dropdown_1 = __importDefault(require("../../components/dropdown/Dropdown"));
const DropdownControllerStyle_1 = require("./DropdownControllerStyle");
const react_hook_form_1 = require("react-hook-form");
const AppDropdownController = (props) => {
    const { control, controller, dropProps: { data, label, labelField, valueField, placeholder, selectionType, containerStyle, ...rest }, } = props;
    const { styles } = (0, DropdownControllerStyle_1.useDropdownControllerStyle)();
    return (<react_hook_form_1.Controller control={control} name={controller} render={({ fieldState: { error }, field: { onBlur, onChange, value }, }) => (<react_native_1.View style={styles.mainContainer}>
          <Dropdown_1.default data={data} value={value} label={label} onBlur={onBlur} onChange={(selectValue, selectedItem) => {
                if (selectionType === 'multi') {
                    return onChange(selectedItem);
                }
                return onChange(selectValue);
            }} labelField={labelField} valueField={valueField} placeholder={placeholder} containerStyle={containerStyle} labelTextStyle={styles.labelText} itemTextStyle={styles.dropdownText} placeholderStyle={styles.itemContainer} selectedTextStyle={styles.selectionText} style={[styles.dropdownContainer, error && styles.errorWrapper]} {...rest}/>
          {error && <AppText_1.default style={styles.error}>{error?.message}</AppText_1.default>}
        </react_native_1.View>)}/>);
};
exports.default = AppDropdownController;

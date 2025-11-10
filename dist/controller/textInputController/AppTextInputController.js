"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AppTextInput_1 = __importDefault(require("../../components/textInput/AppTextInput"));
const InputControllerStyle_1 = require("./InputControllerStyle");
const react_hook_form_1 = require("react-hook-form");
const AppTextControlInput = ({ control, textStyle, labelStyle, controllerName, containerStyle, ...rest }) => {
    const { styles } = (0, InputControllerStyle_1.useInputController)();
    return (<react_hook_form_1.Controller control={control} name={controllerName} render={({ fieldState: { error }, field: { onChange, value, onBlur }, }) => (<AppTextInput_1.default value={value} onBlur={onBlur} error={error?.message} onChangeText={onChange} textStyle={[styles.inputText, textStyle]} labelStyle={[styles.labelText, labelStyle]} style={[styles.inputControlContainer, containerStyle]} {...rest}/>)}/>);
};
exports.default = AppTextControlInput;

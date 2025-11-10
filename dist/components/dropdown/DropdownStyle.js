"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDropdownStyle = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const useOrientation_1 = require("./hooks/useOrientation");
const style_1 = require("../../style");
const useDropdownStyle = (props) => {
    const orientation = (0, useOrientation_1.useDeviceOrientation)();
    const { ...colors } = style_1.LIGHT_COLORS;
    const { size = 16, radioIconColor, checkIconColor } = props;
    const styles = (0, react_1.useMemo)(() => {
        return react_native_1.StyleSheet.create({
            mainContainer: {
                width: '100%',
            },
            mainWrap: {
                borderWidth: 1,
                borderRadius: 6,
                paddingHorizontal: 6,
                justifyContent: 'center',
                borderColor: colors.lightGray,
            },
            container: {
                flexShrink: 1,
                borderWidth: 0.5,
                borderColor: '#EEEEEE',
                shadowColor: colors.black,
                backgroundColor: colors.white,
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                elevation: 2,
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
            },
            flex1: {
                flex: 1,
            },
            flexShrink: {
                flexShrink: 1,
            },
            wrapTop: {
                justifyContent: 'flex-end',
            },
            dropdown: {
                minHeight: 48,
                maxHeight: 170,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: react_native_1.I18nManager.isRTL ? 'row-reverse' : 'row',
            },
            title: {
                fontSize: 16,
                marginVertical: style_1.SPACING.s6,
                writingDirection: react_native_1.I18nManager.isRTL ? 'rtl' : 'ltr',
            },
            item: {
                padding: 17,
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderColor: colors.lightGray,
                justifyContent: 'space-between',
                flexDirection: react_native_1.I18nManager.isRTL ? 'row-reverse' : 'row',
            },
            textItem: {
                flex: 1,
                fontSize: 16,
                writingDirection: react_native_1.I18nManager.isRTL ? 'rtl' : 'ltr',
            },
            icon: {
                width: 20,
                height: 20,
            },
            input: {
                margin: 6,
                height: 45,
                borderWidth: 0.5,
                borderColor: '#DDDDDD',
                marginBottom: style_1.SPACING.s8,
                paddingHorizontal: style_1.SPACING.s8,
            },
            fullScreen: {
                alignItems: 'center',
                justifyContent: 'center',
            },
            labelContainer: {
                marginBottom: style_1.SPACING.s6,
                paddingVertical: style_1.SPACING.s6,
            },
            labelTextStyle: {
                color: colors.black,
            },
            itemIconContainer: {
                borderWidth: 2,
                marginRight: 10,
                borderRadius: 100,
                width: size || 24,
                height: size || 24,
                alignItems: 'center',
                justifyContent: 'center',
                padding: (size || 24) / 8,
                borderColor: radioIconColor || colors.gray,
            },
            iconSubContainer: {
                width: '100%',
                height: '100%',
                borderRadius: 100,
                backgroundColor: radioIconColor || colors.gray,
            },
            styleHorizontal: {
                width: orientation === 'LANDSCAPE' ? style_1.SCREEN_WIDTH / 2 : '100%',
                alignSelf: 'center',
            },
            styleContainerVertical: {
                alignItems: 'center',
                backgroundColor: style_1.DEFAULT_COLORS.blackOpacity,
            },
            checkContainer: {
                borderWidth: 2,
                borderRadius: 2,
                marginRight: 10,
                width: size || 16,
                height: size || 16,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: checkIconColor ? checkIconColor : colors.gray,
            },
            showMultiSelectContainer: {
                width: '90%',
                height: 'auto',
                maxHeight: 200,
            },
            wraps: {
                flexWrap: 'wrap',
                paddingVertical: 6,
                flexDirection: 'row',
                paddingHorizontal: 10,
            },
        });
    }, [size, colors, orientation, radioIconColor, checkIconColor]);
    return {
        styles,
        colors,
    };
};
exports.useDropdownStyle = useDropdownStyle;

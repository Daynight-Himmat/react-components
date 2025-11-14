"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react-hooks/exhaustive-deps */
const react_1 = require("react");
const react_native_1 = require("react-native");
const lodash_1 = __importDefault(require("lodash"));
const useDetectDevice_1 = require("./useDetectDevice");
const useOrientation_1 = require("./useOrientation");
const style_1 = require("../../../style");
const useDropdown = (props) => {
    const { value, onBlur, onFocus, onChange, data = [], labelField, valueField, fontFamily, searchQuery, searchField, onChangeText, disable = false, ref: currentRef, mode = 'default', autoScroll = true, confirmSelectItem, onConfirmSelectItem, selectionType = 'single', } = props;
    const ref = (0, react_1.useRef)(null);
    const { isTablet } = useDetectDevice_1.useDetectDevice;
    const refList = (0, react_1.useRef)(null);
    const orientation = (0, useOrientation_1.useDeviceOrientation)();
    const [position, setPosition] = (0, react_1.useState)();
    const [searchText, setSearchText] = (0, react_1.useState)('');
    const [listData, setListData] = (0, react_1.useState)(data);
    const [visible, setVisible] = (0, react_1.useState)(false);
    const [currentValue, setCurrentValue] = (0, react_1.useState)(null);
    const statusBarHeight = react_native_1.StatusBar.currentHeight || 0;
    const [keyboardHeight, setKeyboardHeight] = (0, react_1.useState)(0);
    (0, react_1.useImperativeHandle)(currentRef, () => {
        return { open: eventOpen, close: eventClose };
    });
    (0, react_1.useEffect)(() => eventClose, []);
    (0, react_1.useEffect)(() => {
        setListData([...data]);
        if (searchText) {
            onSearch(searchText);
        }
    }, [data, searchText]);
    const eventOpen = () => {
        if (!disable) {
            setVisible(true);
            if (onFocus) {
                onFocus();
            }
            if (searchText.length > 0) {
                onSearch(searchText);
            }
            scrollIndex();
        }
    };
    const eventClose = (0, react_1.useCallback)(() => {
        if (!disable) {
            setVisible(false);
            if (onBlur) {
                onBlur();
            }
        }
    }, [disable, onBlur]);
    const font = (0, react_1.useCallback)(() => {
        if (fontFamily) {
            return {
                fontFamily: fontFamily,
            };
        }
        else {
            return {};
        }
    }, [fontFamily]);
    const onMeasure = (0, react_1.useCallback)(() => {
        if (ref && ref?.current) {
            ref.current.measureInWindow((pageX, pageY, width, height) => {
                let isFull = isTablet
                    ? false
                    : mode === 'modal' || orientation === 'LANDSCAPE';
                if (mode === 'auto') {
                    isFull = false;
                }
                const top = isFull ? 20 : height + pageY + 2;
                const bottom = style_1.SCREEN_HEIGHT - top + height;
                const left = react_native_1.I18nManager.isRTL ? style_1.SCREEN_WIDTH - width - pageX : pageX;
                setPosition({
                    isFull,
                    left: Math.floor(left),
                    width: Math.floor(width),
                    height: Math.floor(height),
                    top: Math.floor(top + statusBarHeight),
                    bottom: Math.floor(bottom - statusBarHeight),
                });
            });
        }
    }, [isTablet, mode, orientation, statusBarHeight]);
    const onKeyboardDidShow = (0, react_1.useCallback)((e) => {
        onMeasure();
        setKeyboardHeight(e.endCoordinates.height);
    }, [onMeasure]);
    const onKeyboardDidHide = (0, react_1.useCallback)(() => {
        setKeyboardHeight(0);
        onMeasure();
    }, [onMeasure]);
    (0, react_1.useEffect)(() => {
        const susbcriptionKeyboardDidShow = react_native_1.Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        const susbcriptionKeyboardDidHide = react_native_1.Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
        return () => {
            if (typeof susbcriptionKeyboardDidShow?.remove === 'function') {
                susbcriptionKeyboardDidShow.remove();
            }
            if (typeof susbcriptionKeyboardDidHide?.remove === 'function') {
                susbcriptionKeyboardDidHide.remove();
            }
        };
    }, [onKeyboardDidHide, onKeyboardDidShow]);
    const getValue = (0, react_1.useCallback)(() => {
        if (selectionType === 'multi') {
            if (!valueField)
                return;
            const v = data?.filter(i => value?.includes(i[valueField]));
            setCurrentValue(v);
            return;
        }
        else {
            const defaultValue = typeof value === 'object' ? lodash_1.default.get(value, valueField) : value;
            const getItem = data.filter(e => lodash_1.default.isEqual(defaultValue, lodash_1.default.get(e, valueField)));
            if (getItem.length > 0) {
                setCurrentValue(getItem[0]);
            }
            else {
                setCurrentValue(null);
            }
        }
    }, [data, value, valueField, selectionType]);
    (0, react_1.useEffect)(() => getValue(), [value, data, getValue]);
    const scrollIndex = (0, react_1.useCallback)(() => {
        if (autoScroll && data.length > 0 && listData.length === data.length) {
            setTimeout(() => {
                if (refList && refList?.current) {
                    const defaultValue = typeof value === 'object' ? lodash_1.default.get(value, valueField) : value;
                    const index = lodash_1.default.findIndex(listData, (e) => lodash_1.default.isEqual(defaultValue, lodash_1.default.get(e, valueField)));
                    if (index > -1 && index <= listData.length - 1) {
                        refList?.current?.scrollToIndex({
                            index: index,
                            animated: false,
                        });
                    }
                }
            }, 200);
        }
    }, [autoScroll, data.length, listData, value, valueField]);
    const showOrClose = (0, react_1.useCallback)(() => {
        if (!disable) {
            if (keyboardHeight > 0 && visible) {
                return react_native_1.Keyboard.dismiss();
            }
            onMeasure();
            setVisible(!visible);
            setListData(data);
            if (!visible) {
                if (onFocus) {
                    onFocus();
                }
            }
            else {
                if (onBlur) {
                    onBlur();
                }
            }
            if (searchText?.length > 0) {
                onSearch(searchText);
            }
            scrollIndex();
        }
    }, [
        data,
        onBlur,
        visible,
        disable,
        onFocus,
        onMeasure,
        searchText,
        scrollIndex,
        keyboardHeight,
    ]);
    const onSearch = (0, react_1.useCallback)((text) => {
        if (text.length > 0) {
            const defaultFilterFunction = (e) => {
                const item = lodash_1.default.get(e, searchField || labelField)
                    ?.toLowerCase()
                    .replace(' ', '')
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');
                const key = text
                    .toLowerCase()
                    .replace(' ', '')
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');
                return item.indexOf(key) >= 0;
            };
            const propSearchFunction = (e) => {
                const labelText = lodash_1.default.get(e, searchField || labelField);
                return searchQuery?.(text, labelText);
            };
            const dataSearch = data.filter(searchQuery ? propSearchFunction : defaultFilterFunction);
            setListData(dataSearch);
        }
        else {
            setListData(data);
        }
    }, [data, searchField, labelField, searchQuery]);
    const onSelect = (0, react_1.useCallback)((item) => {
        if (confirmSelectItem && onConfirmSelectItem) {
            return onConfirmSelectItem(item);
        }
        if (onChangeText) {
            setSearchText('');
            onChangeText('');
        }
        onSearch('');
        setCurrentValue(item);
        onChange?.(item[valueField]);
        eventClose();
    }, [
        onChange,
        onSearch,
        eventClose,
        onChangeText,
        confirmSelectItem,
        onConfirmSelectItem,
    ]);
    const onCheckPress = (0, react_1.useCallback)((item) => {
        setCurrentValue?.((prev) => {
            const exists = prev?.some?.((i) => i[valueField] === item[valueField]);
            const va = exists
                ? lodash_1.default.filter(prev, i => i?.[valueField] !== item?.[valueField])
                : [...prev, item];
            const v = va?.map(i => i[valueField]);
            onChange?.(item[valueField], selectionType === 'multi' ? v : item[valueField]);
            return va;
        });
    }, [setCurrentValue, valueField, onChange, currentValue]);
    const onClearPress = (0, react_1.useCallback)((item) => {
        const updated = currentValue.filter((i) => i[valueField] !== item[valueField]);
        const val = currentValue.map((i) => i[valueField]);
        setCurrentValue(updated);
        onChange?.(item[valueField], val);
    }, [currentValue, valueField, onChange, setCurrentValue]);
    return {
        ref,
        font,
        refList,
        visible,
        position,
        onSelect,
        onSearch,
        listData,
        onMeasure,
        searchText,
        showOrClose,
        scrollIndex,
        currentValue,
        onCheckPress,
        onClearPress,
        setSearchText,
        keyboardHeight,
    };
};
exports.default = useDropdown;

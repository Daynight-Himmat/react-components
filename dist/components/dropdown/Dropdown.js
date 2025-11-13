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
/* eslint-disable react-hooks/exhaustive-deps */
const react_native_1 = require("react-native");
const lodash_1 = __importDefault(require("lodash"));
const AppText_1 = __importDefault(require("../text/AppText"));
const Chip_1 = __importDefault(require("./components/chip/Chip"));
const react_1 = __importStar(require("react"));
const useDropdown_1 = __importDefault(require("./hooks/useDropdown"));
const SvgButton_1 = __importDefault(require("../svgButton/SvgButton"));
const DropdownStyle_1 = require("./DropdownStyle");
const CheckIcon_1 = __importDefault(require("../../assets/svg/CheckIcon"));
const svg_1 = require("../../assets/svg");
const TextInput_1 = __importDefault(require("./components/input/TextInput"));
const DropdownComponent = (props) => {
    const { label, testID, iconStyle, renderItem, style = {}, subfixIcon, labelField, valueField, onChangeText, itemTextStyle, flatListProps, minHeight = 0, containerStyle, search = false, renderLeftIcon, multiSelectIcon, itemTestIDField, maxHeight = 300, inverted = true, renderRightIcon, backgroundColor, placeholderStyle, inputSearchStyle, searchPlaceholder, selectedTextStyle, renderInputSearch, chipContainerProps, iconColor = 'gray', accessibilityLabel, itemContainerStyle, labelContainer = {}, labelTextStyle = {}, selectedTextProps = {}, selectionType = 'single', activeColor = 'lightGray', keyboardAvoiding = true, dropdownPosition = 'auto', placeholder = 'Select item', itemAccessibilityLabelField, showsVerticalScrollIndicator = true, } = props;
    const { chipColor, clearIcon, textColor, onClearPress: onClear, } = chipContainerProps;
    const { styles, colors } = (0, DropdownStyle_1.useDropdownStyle)({});
    const { ref, font, visible, refList, position, onSelect, listData, onSearch, onMeasure, searchText, showOrClose, scrollIndex, currentValue, onCheckPress, onClearPress, setSearchText, keyboardHeight, } = (0, useDropdown_1.default)({ ...props });
    const renderRight = () => {
        return renderRightIcon ? (renderRightIcon(visible)) : (<SvgButton_1.default icon={subfixIcon ? subfixIcon : visible ? <svg_1.ArrowUp color={iconColor}/> : <svg_1.ArrowDown color={iconColor}/>} onPress={showOrClose} style={react_native_1.StyleSheet.flatten([
                iconStyle,
                styles.icon,
                { tintColor: iconColor },
            ])}/>);
    };
    const _renderDropdown = () => {
        const isSelected = currentValue && lodash_1.default.get(currentValue, valueField);
        return (<react_native_1.TouchableWithoutFeedback testID={testID} accessible={!!accessibilityLabel} accessibilityLabel={accessibilityLabel} onPress={() => (selectionType === 'single' ? showOrClose() : null)}>
        <react_native_1.View style={styles.dropdown}>
          {renderLeftIcon?.(visible)}
          {selectionType === 'single' ? (<AppText_1.default style={[
                    styles.textItem,
                    isSelected !== null ? selectedTextStyle : placeholderStyle,
                    font(),
                ]} {...selectedTextProps}>
              {isSelected !== null
                    ? lodash_1.default.get(currentValue, labelField)
                    : placeholder}
            </AppText_1.default>) : currentValue?.length === 0 ? (<AppText_1.default style={[styles.textItem, placeholderStyle, font()]} {...selectedTextProps}>
              {placeholder}
            </AppText_1.default>) : (<react_native_1.View style={styles.showMultiSelectContainer}>
              <react_native_1.ScrollView showsVerticalScrollIndicator={false}>
                <react_native_1.View style={styles.wraps}>
                  {currentValue?.map?.((i) => (<Chip_1.default chipColor={chipColor || 'red'} textColor={textColor || 'white'} clearIcon={clearIcon} key={i?.[valueField]} label={i?.[labelField]} onClearPress={() => {
                        onClear?.();
                        onClearPress?.(i);
                    }}/>))}
                </react_native_1.View>
              </react_native_1.ScrollView>
            </react_native_1.View>)}
          {renderRight()}
        </react_native_1.View>
      </react_native_1.TouchableWithoutFeedback>);
    };
    const renderRadio = (0, react_1.useCallback)((selected) => {
        return (<react_native_1.View style={styles.itemIconContainer}>
          {selected && <react_native_1.View style={styles.iconSubContainer}/>}
        </react_native_1.View>);
    }, [styles]);
    const renderCheckItem = (0, react_1.useCallback)(({ item, index }) => {
        const isSelected = lodash_1.default.some(currentValue, h => lodash_1.default.isEqual(lodash_1.default.get(h, valueField), lodash_1.default.get(item, valueField)));
        return (<react_native_1.TouchableHighlight key={index.toString()} testID={lodash_1.default.get(item, itemTestIDField || labelField)} accessible={!!accessibilityLabel} accessibilityLabel={lodash_1.default.get(item, itemAccessibilityLabelField || labelField)} underlayColor={colors[activeColor]} onPress={() => onCheckPress(item)}>
          <react_native_1.View style={react_native_1.StyleSheet.flatten([itemContainerStyle])}>
            {renderItem ? (renderItem(item, isSelected, labelField, valueField)) : (<react_native_1.View style={styles.item}>
                <SvgButton_1.default icon={multiSelectIcon ? multiSelectIcon : <CheckIcon_1.default color={colors.white}/>} onPress={() => onCheckPress(item)} style={[
                    styles.checkContainer,
                    {
                        backgroundColor: isSelected ? colors.gray : colors.white,
                    },
                ]}/>
                <AppText_1.default style={react_native_1.StyleSheet.flatten([
                    styles.textItem,
                    itemTextStyle,
                    font(),
                ])}>
                  {lodash_1.default.get(item, labelField)}
                </AppText_1.default>
              </react_native_1.View>)}
          </react_native_1.View>
        </react_native_1.TouchableHighlight>);
    }, [
        font,
        colors,
        styles,
        labelField,
        renderItem,
        valueField,
        activeColor,
        currentValue,
        itemTextStyle,
        itemTestIDField,
        accessibilityLabel,
        itemContainerStyle,
        itemAccessibilityLabelField,
    ]);
    const _renderItem = (0, react_1.useCallback)(({ item, index }) => {
        const isSelected = currentValue && lodash_1.default.get(currentValue, valueField);
        const selected = lodash_1.default.isEqual(lodash_1.default.get(item, valueField), isSelected);
        lodash_1.default.assign(item, { _index: index });
        return (<react_native_1.TouchableHighlight key={index.toString()} testID={lodash_1.default.get(item, itemTestIDField || labelField)} accessible={!!accessibilityLabel} accessibilityLabel={lodash_1.default.get(item, itemAccessibilityLabelField || labelField)} underlayColor={colors[activeColor]} onPress={() => onSelect(item)}>
          <react_native_1.View style={react_native_1.StyleSheet.flatten([itemContainerStyle])}>
            {renderItem ? (renderItem(item, selected, labelField, valueField)) : (<react_native_1.View style={styles.item}>
                {renderRadio(selected)}
                <AppText_1.default style={react_native_1.StyleSheet.flatten([
                    styles.textItem,
                    itemTextStyle,
                    font(),
                ])}>
                  {lodash_1.default.get(item, labelField)}
                </AppText_1.default>
              </react_native_1.View>)}
          </react_native_1.View>
        </react_native_1.TouchableHighlight>);
    }, [
        font,
        colors,
        styles,
        onSelect,
        labelField,
        renderItem,
        valueField,
        renderRadio,
        activeColor,
        currentValue,
        itemTextStyle,
        itemTestIDField,
        accessibilityLabel,
        itemContainerStyle,
        itemAccessibilityLabelField,
    ]);
    const renderSearch = (0, react_1.useCallback)(() => {
        if (search) {
            if (renderInputSearch) {
                return renderInputSearch(text => {
                    if (onChangeText) {
                        setSearchText(text);
                        onChangeText(text);
                    }
                    onSearch(text);
                });
            }
            else {
                return (<TextInput_1.default value={searchText} autoCorrect={false} testID={testID + ' input'} placeholderTextColor={colors.black} style={[styles.input, inputSearchStyle]} accessibilityLabel={accessibilityLabel + ' input'} placeholder={searchPlaceholder || 'Write here for search...'} onChangeText={(e) => {
                        if (onChangeText) {
                            setSearchText(e);
                            onChangeText(e);
                        }
                        onSearch(e);
                    }}/>);
            }
        }
        return null;
    }, [
        search,
        testID,
        colors,
        styles,
        onSearch,
        searchText,
        onChangeText,
        inputSearchStyle,
        renderInputSearch,
        searchPlaceholder,
        accessibilityLabel,
    ]);
    const _renderList = (0, react_1.useCallback)((isTopPosition) => {
        const isInverted = !inverted ? false : isTopPosition;
        const _renderListHelper = () => {
            return (<react_native_1.FlatList ref={refList} data={listData} {...flatListProps} testID={testID + ' flatlist'} keyboardShouldPersistTaps="handled" onScrollToIndexFailed={scrollIndex} inverted={isTopPosition ? inverted : false} keyExtractor={(_item, index) => index.toString()} accessibilityLabel={accessibilityLabel + ' flatlist'} showsVerticalScrollIndicator={showsVerticalScrollIndicator} renderItem={selectionType === 'single' ? _renderItem : renderCheckItem}/>);
        };
        return (<react_native_1.TouchableWithoutFeedback>
          <react_native_1.View style={styles.flexShrink}>
            {isInverted && _renderListHelper()}
            {renderSearch()}
            {!isInverted && _renderListHelper()}
          </react_native_1.View>
        </react_native_1.TouchableWithoutFeedback>);
    }, [
        styles,
        testID,
        inverted,
        listData,
        scrollIndex,
        renderSearch,
        flatListProps,
        renderCheckItem,
        accessibilityLabel,
        showsVerticalScrollIndicator,
    ]);
    const _renderModal = (0, react_1.useCallback)(() => {
        if (visible && position) {
            const { isFull, width, height, top, bottom, left } = position;
            const onAutoPosition = () => {
                if (keyboardHeight > 0) {
                    return bottom < keyboardHeight + height;
                }
                return bottom < (search ? 150 : 100);
            };
            if (width && top && bottom) {
                const styleVertical = {
                    left: left,
                    maxHeight: maxHeight,
                    minHeight: minHeight,
                };
                const isTopPosition = dropdownPosition === 'auto'
                    ? onAutoPosition()
                    : dropdownPosition === 'top';
                let keyboardStyle = {};
                let extendHeight = !isTopPosition ? top : bottom;
                if (keyboardAvoiding &&
                    keyboardHeight > 0 &&
                    isTopPosition &&
                    dropdownPosition === 'auto') {
                    extendHeight = keyboardHeight;
                }
                return (<react_native_1.Modal transparent visible={visible} statusBarTranslucent onRequestClose={showOrClose} supportedOrientations={['landscape', 'portrait']}>
            <react_native_1.TouchableWithoutFeedback onPress={showOrClose}>
              <react_native_1.View style={react_native_1.StyleSheet.flatten([
                        styles.flex1,
                        isFull && styles.styleContainerVertical,
                        backgroundColor && { backgroundColor: backgroundColor },
                        keyboardStyle,
                    ])}>
                <react_native_1.View style={react_native_1.StyleSheet.flatten([
                        styles.flex1,
                        !isTopPosition
                            ? { paddingTop: extendHeight }
                            : {
                                justifyContent: 'flex-end',
                                paddingBottom: extendHeight,
                            },
                        isFull && styles.fullScreen,
                    ])}>
                  <react_native_1.View style={react_native_1.StyleSheet.flatten([
                        styles.container,
                        isFull ? styles.styleHorizontal : styleVertical,
                        {
                            width,
                        },
                        containerStyle,
                    ])}>
                    {_renderList(isTopPosition)}
                  </react_native_1.View>
                </react_native_1.View>
              </react_native_1.View>
            </react_native_1.TouchableWithoutFeedback>
          </react_native_1.Modal>);
            }
            return null;
        }
        return null;
    }, [
        search,
        styles,
        visible,
        position,
        maxHeight,
        minHeight,
        showOrClose,
        _renderList,
        keyboardHeight,
        containerStyle,
        backgroundColor,
        dropdownPosition,
        keyboardAvoiding,
    ]);
    const _renderLabel = (0, react_1.useCallback)(() => {
        return label ? (<react_native_1.View style={[styles.labelContainer, labelContainer]}>
        <AppText_1.default style={[styles.labelTextStyle, labelTextStyle]}>
          {label}
        </AppText_1.default>
      </react_native_1.View>) : (<></>);
    }, [label, labelContainer, labelTextStyle, styles]);
    return (<react_native_1.View style={styles.mainContainer}>
      {_renderLabel()}
      <react_native_1.View ref={ref} onLayout={onMeasure} style={react_native_1.StyleSheet.flatten([styles.mainWrap, style])}>
        {_renderDropdown()}
        {_renderModal()}
      </react_native_1.View>
    </react_native_1.View>);
};
exports.default = DropdownComponent;

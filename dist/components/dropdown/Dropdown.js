import { View, Modal, FlatList, StyleSheet, ScrollView, TouchableHighlight, TouchableWithoutFeedback, } from 'react-native';
import _ from 'lodash';
import AppText from '../text/AppText';
import Chip from './component/chip/Chip';
import React, { useCallback } from 'react';
import useDropdown from './hooks/useDropdown';
import SvgButton from '../svgButton/SvgButton';
import { useDropdownStyle } from './DropdownStyle';
import { ArrowDown, ArrowUp, CheckIcon } from '../../assets/svg';
import SearchInput from './component/input/TextInput';
const DropdownComponent = (props) => {
    const { label, testID, iconStyle, renderItem, style = {}, subfixIcon, labelField, valueField, onChangeText, itemTextStyle, flatListProps, minHeight = 0, containerStyle, search = false, renderLeftIcon, checkIconColor, radioIconColor, multiSelectIcon, itemTestIDField, maxHeight = 300, inverted = true, renderRightIcon, placeholderStyle, inputSearchStyle, searchPlaceholder, selectedTextStyle, renderInputSearch, iconColor = 'gray', accessibilityLabel, itemContainerStyle, labelContainer = {}, labelTextStyle = {}, selectedTextProps = {}, chipContainerProps = {}, keyboardAvoiding = true, selectionType = 'single', activeColor = 'lightGray', dropdownPosition = 'auto', itemAccessibilityLabelField, placeholder = 'Please select', showsVerticalScrollIndicator = true, } = props;
    const { chipColor, clearIcon, textColor, onClearPress: onClear, } = chipContainerProps;
    const { styles, colors } = useDropdownStyle({
        checkIconColor: checkIconColor,
        radioIconColor: radioIconColor,
    });
    const { ref, font, visible, refList, position, onSelect, listData, onSearch, onMeasure, searchText, showOrClose, scrollIndex, currentValue, onCheckPress, onClearPress, setSearchText, keyboardHeight, } = useDropdown({ ...props });
    const renderRight = () => {
        return renderRightIcon ? (renderRightIcon(visible)) : (<SvgButton icon={subfixIcon ? (subfixIcon) : visible ? (<ArrowUp color={iconColor}/>) : (<ArrowDown color={iconColor}/>)} onPress={showOrClose} style={StyleSheet.flatten([
                iconStyle,
                styles.icon,
                { tintColor: iconColor },
            ])}/>);
    };
    const _renderDropdown = () => {
        const isSelected = currentValue && _.get(currentValue, valueField);
        return (<TouchableWithoutFeedback testID={testID} accessible={!!accessibilityLabel} accessibilityLabel={accessibilityLabel} onPress={() => (selectionType === 'single' ? showOrClose() : null)}>
        <View style={styles.dropdown}>
          {renderLeftIcon?.(visible)}
          {selectionType === 'single' ? (<AppText style={[
                    styles.textItem,
                    isSelected !== null ? selectedTextStyle : placeholderStyle,
                    font(),
                ]} {...selectedTextProps}>
              {isSelected !== null
                    ? _.get(currentValue, labelField)
                    : placeholder}
            </AppText>) : currentValue?.length === 0 ? (<AppText style={[styles.textItem, placeholderStyle, font()]} {...selectedTextProps}>
              {placeholder}
            </AppText>) : (<View style={styles.showMultiSelectContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wraps}>
                  {currentValue?.map?.((i) => (<Chip chipColor={chipColor || 'red'} textColor={textColor || 'white'} clearIcon={clearIcon} key={i?.[valueField]} label={i?.[labelField]} onClearPress={() => {
                        onClear?.();
                        onClearPress?.(i);
                    }}/>))}
                </View>
              </ScrollView>
            </View>)}
          {renderRight()}
        </View>
      </TouchableWithoutFeedback>);
    };
    const renderRadio = useCallback((selected) => {
        return (<View style={styles.itemIconContainer}>
          {selected && <View style={styles.iconSubContainer}/>}
        </View>);
    }, [styles]);
    const renderCheckItem = useCallback(({ item, index }) => {
        const isSelected = _.some(currentValue, (h) => _.isEqual(_.get(h, valueField), _.get(item, valueField)));
        return (<TouchableHighlight key={index.toString()} testID={_.get(item, itemTestIDField || labelField)} accessible={!!accessibilityLabel} accessibilityLabel={_.get(item, itemAccessibilityLabelField || labelField)} underlayColor={activeColor} onPress={() => onCheckPress(item)}>
          <View style={StyleSheet.flatten([itemContainerStyle])}>
            {renderItem ? (renderItem(item, isSelected, labelField, valueField)) : (<View style={styles.item}>
                <SvgButton icon={multiSelectIcon ? (multiSelectIcon) : (<CheckIcon color={colors.white}/>)} onPress={() => onCheckPress(item)} style={[
                    styles.checkContainer,
                    {
                        backgroundColor: isSelected
                            ? checkIconColor
                                ? checkIconColor
                                : colors.gray
                            : colors.white,
                    },
                ]}/>
                <AppText style={StyleSheet.flatten([
                    styles.textItem,
                    itemTextStyle,
                    font(),
                ])}>
                  {_.get(item, labelField)}
                </AppText>
              </View>)}
          </View>
        </TouchableHighlight>);
    }, [
        currentValue,
        itemTestIDField,
        labelField,
        accessibilityLabel,
        itemAccessibilityLabelField,
        activeColor,
        itemContainerStyle,
        renderItem,
        valueField,
        styles,
        multiSelectIcon,
        colors,
        checkIconColor,
        itemTextStyle,
        font,
        onCheckPress,
    ]);
    const _renderItem = useCallback(({ item, index }) => {
        const isSelected = currentValue && _.get(currentValue, valueField);
        const selected = _.isEqual(_.get(item, valueField), isSelected);
        _.assign(item, { _index: index });
        return (<TouchableHighlight key={index.toString()} testID={_.get(item, itemTestIDField || labelField)} accessible={!!accessibilityLabel} accessibilityLabel={_.get(item, itemAccessibilityLabelField || labelField)} underlayColor={activeColor} onPress={() => onSelect(item)}>
          <View style={StyleSheet.flatten([itemContainerStyle])}>
            {renderItem ? (renderItem(item, selected, labelField, valueField)) : (<View style={styles.item}>
                {renderRadio(selected)}
                <AppText style={StyleSheet.flatten([
                    styles.textItem,
                    itemTextStyle,
                    font(),
                ])}>
                  {_.get(item, labelField)}
                </AppText>
              </View>)}
          </View>
        </TouchableHighlight>);
    }, [
        font,
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
    const renderSearch = useCallback(() => {
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
                return (<SearchInput value={searchText} autoCorrect={false} testID={testID + ' input'} placeholderTextColor={colors.black} style={[styles.input, inputSearchStyle]} accessibilityLabel={accessibilityLabel + ' input'} placeholder={searchPlaceholder || 'Write here for search...'} onChangeText={(e) => {
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
        renderInputSearch,
        onChangeText,
        onSearch,
        setSearchText,
        searchText,
        testID,
        colors,
        styles,
        inputSearchStyle,
        accessibilityLabel,
        searchPlaceholder,
    ]);
    const _renderList = useCallback((isTopPosition) => {
        const isInverted = !inverted ? false : isTopPosition;
        const _renderListHelper = () => {
            return (<FlatList ref={refList} data={listData} {...flatListProps} testID={testID + ' flatlist'} keyboardShouldPersistTaps="handled" onScrollToIndexFailed={scrollIndex} inverted={isTopPosition ? inverted : false} keyExtractor={(_item, index) => index.toString()} accessibilityLabel={accessibilityLabel + ' flatlist'} showsVerticalScrollIndicator={showsVerticalScrollIndicator} renderItem={selectionType === 'single' ? _renderItem : renderCheckItem}/>);
        };
        return (<TouchableWithoutFeedback>
          <View style={styles.flexShrink}>
            {isInverted && _renderListHelper()}
            {renderSearch()}
            {!isInverted && _renderListHelper()}
          </View>
        </TouchableWithoutFeedback>);
    }, [
        inverted,
        styles,
        renderSearch,
        refList,
        listData,
        flatListProps,
        testID,
        scrollIndex,
        accessibilityLabel,
        showsVerticalScrollIndicator,
        selectionType,
        _renderItem,
        renderCheckItem,
    ]);
    const _renderModal = useCallback(() => {
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
                return (<Modal transparent visible={visible} statusBarTranslucent onRequestClose={showOrClose} supportedOrientations={['landscape', 'portrait']}>
            <TouchableWithoutFeedback onPress={showOrClose}>
              <View style={StyleSheet.flatten([
                        styles.flex1,
                        isFull && styles.styleContainerVertical,
                        keyboardStyle,
                    ])}>
                <View style={StyleSheet.flatten([
                        styles.flex1,
                        !isTopPosition
                            ? { paddingTop: extendHeight }
                            : {
                                justifyContent: 'flex-end',
                                paddingBottom: extendHeight,
                            },
                        isFull && styles.fullScreen,
                    ])}>
                  <View style={StyleSheet.flatten([
                        styles.container,
                        isFull ? styles.styleHorizontal : styleVertical,
                        {
                            width,
                        },
                        containerStyle,
                    ])}>
                    {_renderList(isTopPosition)}
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>);
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
        dropdownPosition,
        keyboardAvoiding,
    ]);
    const _renderLabel = useCallback(() => {
        return label ? (<View style={[styles.labelContainer, labelContainer]}>
        <AppText style={[styles.labelTextStyle, labelTextStyle]}>
          {label}
        </AppText>
      </View>) : (<></>);
    }, [label, labelContainer, labelTextStyle, styles]);
    return (<View style={styles.mainContainer}>
      {_renderLabel()}
      <View ref={ref} onLayout={onMeasure} style={StyleSheet.flatten([styles.mainWrap, style])}>
        {_renderDropdown()}
        {_renderModal()}
      </View>
    </View>);
};
export default DropdownComponent;

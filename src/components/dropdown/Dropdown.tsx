/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import {
  View,
  Modal,
  FlatList,
  ViewStyle,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import _ from 'lodash';
import AppText from '../text/AppText';
import Chip from './components/chip/Chip';
import useDropdown from './hooks/useDropdown';
import SvgButton from '../svgButton/SvgButton';
import { useDropdownStyle } from './DropdownStyle';
import SearchInput from './components/input/TextInput';
import { DropdownProps } from './interface/DropdownInterface';

const DropdownComponent = <T, Mode extends 'single' | 'multi'>(
  props: DropdownProps<T, Mode>,
) => {
  const {
    label,
    testID,
    iconStyle,
    renderItem,
    style = {},
    subfixIcon,
    labelField,
    valueField,
    onChangeText,
    itemTextStyle,
    flatListProps,
    minHeight = 0,
    containerStyle,
    search = false,
    renderLeftIcon,
    multiSelectIcon,
    itemTestIDField,
    maxHeight = 300,
    inverted = true,
    renderRightIcon,
    backgroundColor,
    placeholderStyle,
    inputSearchStyle,
    searchPlaceholder,
    selectedTextStyle,
    renderInputSearch,
    iconColor = 'gray',
    accessibilityLabel,
    itemContainerStyle,
    labelContainer = {},
    labelTextStyle = {},
    selectedTextProps = {},
    selectionType = 'single',
    activeColor = 'lightGray',
    keyboardAvoiding = true,
    dropdownPosition = 'auto',
    placeholder = 'Select item',
    itemAccessibilityLabelField,
    showsVerticalScrollIndicator = true,
  } = props;

  const { styles, colors } = useDropdownStyle({});
  const {
    ref,
    font,
    visible,
    refList,
    position,
    onSelect,
    listData,
    onSearch,
    onMeasure,
    searchText,
    showOrClose,
    scrollIndex,
    currentValue,
    onCheckPress,
    onClearPress,
    setSearchText,
    keyboardHeight,
  } = useDropdown({ ...props });

  const renderRight = () => {
    return renderRightIcon ? (
      renderRightIcon(visible)
    ) : (
      <SvgButton
        icon={subfixIcon}
        onPress={showOrClose}
        style={StyleSheet.flatten([
          iconStyle,
          styles.icon,
          { tintColor: iconColor },
        ])}
      />
    );
  };

  const _renderDropdown = () => {
    const isSelected = currentValue && _.get(currentValue, valueField);
    return (
      <TouchableWithoutFeedback
        testID={testID}
        accessible={!!accessibilityLabel}
        accessibilityLabel={accessibilityLabel}
        onPress={() => (selectionType === 'single' ? showOrClose() : null)}
      >
        <View style={styles.dropdown}>
          {renderLeftIcon?.(visible)}
          {selectionType === 'single' ? (
            <AppText
              style={[
                styles.textItem,
                isSelected !== null ? selectedTextStyle : placeholderStyle,
                font(),
              ]}
              {...selectedTextProps}
            >
              {isSelected !== null
                ? _.get(currentValue, labelField)
                : placeholder}
            </AppText>
          ) : currentValue?.length === 0 ? (
            <AppText
              style={[styles.textItem, placeholderStyle, font()]}
              {...selectedTextProps}
            >
              {placeholder}
            </AppText>
          ) : (
            <View style={styles.showMultiSelectContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wraps}>
                  {currentValue?.map?.((i: any) => (
                    <Chip
                      label={i.name}
                      chipColor={'red'}
                      textColor={'white'}
                      key={i?.[valueField]}
                      onClearPress={() => onClearPress(i)}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
          )}
          {renderRight()}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderRadio = useCallback(
    (selected: boolean) => {
      return (
        <View style={styles.itemIconContainer}>
          {selected && <View style={styles.iconSubContainer} />}
        </View>
      );
    },
    [styles],
  );

  const renderCheckItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      const isSelected = _.some(currentValue, h =>
        _.isEqual(_.get(h, valueField), _.get(item, valueField)),
      );
      return (
        <TouchableHighlight
          key={index.toString()}
          testID={_.get(item, itemTestIDField || labelField)}
          accessible={!!accessibilityLabel}
          accessibilityLabel={_.get(
            item,
            itemAccessibilityLabelField || labelField,
          )}
          underlayColor={colors[activeColor]}
          onPress={() => onCheckPress(item)}
        >
          <View style={StyleSheet.flatten([itemContainerStyle])}>
            {renderItem ? (
              renderItem(item, isSelected)
            ) : (
              <View style={styles.item}>
                <SvgButton
                  icon={multiSelectIcon}
                  onPress={() => onCheckPress(item)}
                  style={[
                    styles.checkContainer,
                    {
                      backgroundColor: isSelected ? colors.gray : colors.white,
                    },
                  ]}
                />
                <AppText
                  style={StyleSheet.flatten([
                    styles.textItem,
                    itemTextStyle,
                    font(),
                  ])}
                >
                  {_.get(item, labelField)}
                </AppText>
              </View>
            )}
          </View>
        </TouchableHighlight>
      );
    },
    [
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
    ],
  );

  const _renderItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      const isSelected = currentValue && _.get(currentValue, valueField);
      const selected = _.isEqual(_.get(item, valueField), isSelected);
      _.assign(item, { _index: index });
      return (
        <TouchableHighlight
          key={index.toString()}
          testID={_.get(item, itemTestIDField || labelField)}
          accessible={!!accessibilityLabel}
          accessibilityLabel={_.get(
            item,
            itemAccessibilityLabelField || labelField,
          )}
          underlayColor={colors[activeColor]}
          onPress={() => onSelect(item)}
        >
          <View style={StyleSheet.flatten([itemContainerStyle])}>
            {renderItem ? (
              renderItem(item, selected)
            ) : (
              <View style={styles.item}>
                {renderRadio(selected)}
                <AppText
                  style={StyleSheet.flatten([
                    styles.textItem,
                    itemTextStyle,
                    font(),
                  ])}
                >
                  {_.get(item, labelField)}
                </AppText>
              </View>
            )}
          </View>
        </TouchableHighlight>
      );
    },
    [
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
    ],
  );

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
      } else {
        return (
          <SearchInput
            value={searchText}
            autoCorrect={false}
            testID={testID + ' input'}
            placeholder={searchPlaceholder}
            placeholderTextColor={colors.black}
            style={[styles.input, inputSearchStyle]}
            accessibilityLabel={accessibilityLabel + ' input'}
            onChangeText={(e: any) => {
              if (onChangeText) {
                setSearchText(e);
                onChangeText(e);
              }
              onSearch(e);
            }}
          />
        );
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

  const _renderList = useCallback(
    (isTopPosition: boolean) => {
      const isInverted = !inverted ? false : isTopPosition;

      const _renderListHelper = () => {
        return (
          <FlatList
            ref={refList}
            data={listData}
            {...flatListProps}
            testID={testID + ' flatlist'}
            keyboardShouldPersistTaps="handled"
            onScrollToIndexFailed={scrollIndex}
            inverted={isTopPosition ? inverted : false}
            keyExtractor={(_item, index) => index.toString()}
            accessibilityLabel={accessibilityLabel + ' flatlist'}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
            renderItem={
              selectionType === 'single' ? _renderItem : renderCheckItem
            }
          />
        );
      };

      return (
        <TouchableWithoutFeedback>
          <View style={styles.flexShrink}>
            {isInverted && _renderListHelper()}
            {renderSearch()}
            {!isInverted && _renderListHelper()}
          </View>
        </TouchableWithoutFeedback>
      );
    },
    [
      inverted,
      styles,
      testID,
      listData,
      scrollIndex,
      renderSearch,
      flatListProps,
      renderCheckItem,
      accessibilityLabel,
      showsVerticalScrollIndicator,
    ],
  );

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
        const styleVertical: ViewStyle = {
          left: left,
          maxHeight: maxHeight,
          minHeight: minHeight,
        };
        const isTopPosition =
          dropdownPosition === 'auto'
            ? onAutoPosition()
            : dropdownPosition === 'top';

        let keyboardStyle: ViewStyle = {};

        let extendHeight = !isTopPosition ? top : bottom;
        if (
          keyboardAvoiding &&
          keyboardHeight > 0 &&
          isTopPosition &&
          dropdownPosition === 'auto'
        ) {
          extendHeight = keyboardHeight;
        }

        return (
          <Modal
            transparent
            visible={visible}
            statusBarTranslucent
            onRequestClose={showOrClose}
            supportedOrientations={['landscape', 'portrait']}
          >
            <TouchableWithoutFeedback onPress={showOrClose}>
              <View
                style={StyleSheet.flatten([
                  styles.flex1,
                  isFull && styles.styleContainerVertical,
                  backgroundColor && { backgroundColor: backgroundColor },
                  keyboardStyle,
                ])}
              >
                <View
                  style={StyleSheet.flatten([
                    styles.flex1,
                    !isTopPosition
                      ? { paddingTop: extendHeight }
                      : {
                          justifyContent: 'flex-end',
                          paddingBottom: extendHeight,
                        },
                    isFull && styles.fullScreen,
                  ])}
                >
                  <View
                    style={StyleSheet.flatten([
                      styles.container,
                      isFull ? styles.styleHorizontal : styleVertical,
                      {
                        width,
                      },
                      containerStyle,
                    ])}
                  >
                    {_renderList(isTopPosition)}
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        );
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

  const _renderLabel = useCallback(() => {
    return label ? (
      <View style={[styles.labelContainer, labelContainer]}>
        <AppText style={[styles.labelTextStyle, labelTextStyle]}>
          {label}
        </AppText>
      </View>
    ) : (
      <></>
    );
  }, [label, labelContainer, labelTextStyle, styles]);

  return (
    <View style={styles.mainContainer}>
      {_renderLabel()}
      <View
        ref={ref}
        onLayout={onMeasure}
        style={StyleSheet.flatten([styles.mainWrap, style])}
      >
        {_renderDropdown()}
        {_renderModal()}
      </View>
    </View>
  );
};

export default DropdownComponent;

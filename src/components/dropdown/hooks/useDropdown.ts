/* eslint-disable react-hooks/exhaustive-deps */
import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
} from 'react';
import {
  View,
  FlatList,
  Keyboard,
  StatusBar,
  I18nManager,
  KeyboardEvent,
} from 'react-native';
import _ from 'lodash';
import { useDetectDevice } from './useDetectDevice';
import { useDeviceOrientation } from './useOrientation';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../style';
import { DropdownProps } from '../interface/DropdownInterface';

const useDropdown = <T, Mode extends 'single' | 'multi'>(
  props: DropdownProps<T, Mode>,
) => {
  const {
    value,
    onBlur,
    onFocus,
    onChange,
    data = [],
    labelField,
    valueField,
    fontFamily,
    searchQuery,
    searchField,
    onChangeText,
    disable = false,
    ref: currentRef,
    mode = 'default',
    autoScroll = true,
    confirmSelectItem,
    onConfirmSelectItem,
    selectionType = 'single',
  } = props;

  const ref = useRef<View>(null);
  const { isTablet } = useDetectDevice;
  const refList = useRef<FlatList>(null);
  const orientation = useDeviceOrientation();
  const [position, setPosition] = useState<any>();
  const [searchText, setSearchText] = useState('');
  const [listData, setListData] = useState<T[]>(data);
  const [visible, setVisible] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<any>(null);
  const statusBarHeight: number = StatusBar.currentHeight || 0;
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  useImperativeHandle(currentRef, () => {
    return { open: eventOpen, close: eventClose };
  });

  useEffect(() => eventClose, []);

  useEffect(() => {
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

  const eventClose = useCallback(() => {
    if (!disable) {
      setVisible(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [disable, onBlur]);

  const font = useCallback(() => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily,
      };
    } else {
      return {};
    }
  }, [fontFamily]);

  const onMeasure = useCallback(() => {
    if (ref && ref?.current) {
      ref.current.measureInWindow((pageX, pageY, width, height) => {
        let isFull = isTablet
          ? false
          : mode === 'modal' || orientation === 'LANDSCAPE';

        if (mode === 'auto') {
          isFull = false;
        }

        const top = isFull ? 20 : height + pageY + 2;
        const bottom = SCREEN_HEIGHT - top + height;
        const left = I18nManager.isRTL ? SCREEN_WIDTH - width - pageX : pageX;

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

  const onKeyboardDidShow = useCallback(
    (e: KeyboardEvent) => {
      onMeasure();
      setKeyboardHeight(e.endCoordinates.height);
    },
    [onMeasure],
  );

  const onKeyboardDidHide = useCallback(() => {
    setKeyboardHeight(0);
    onMeasure();
  }, [onMeasure]);

  useEffect(() => {
    const susbcriptionKeyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const susbcriptionKeyboardDidHide = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );

    return () => {
      if (typeof susbcriptionKeyboardDidShow?.remove === 'function') {
        susbcriptionKeyboardDidShow.remove();
      }

      if (typeof susbcriptionKeyboardDidHide?.remove === 'function') {
        susbcriptionKeyboardDidHide.remove();
      }
    };
  }, [onKeyboardDidHide, onKeyboardDidShow]);

  const getValue = useCallback(() => {
    if (selectionType === 'multi') {
      if (!valueField) return;
      const v = data?.filter(i => value?.includes(i[valueField] as any));
      setCurrentValue(v);
      return;
    } else {
      const defaultValue =
        typeof value === 'object' ? _.get(value, valueField) : value;

      const getItem = data.filter(e =>
        _.isEqual(defaultValue, _.get(e, valueField)),
      );
      if (getItem.length > 0) {
        setCurrentValue(getItem[0]);
      } else {
        setCurrentValue(null);
      }
    }
  }, [data, value, valueField, selectionType]);

  useEffect(() => getValue(), [value, data, getValue]);

  const scrollIndex = useCallback(() => {
    if (autoScroll && data.length > 0 && listData.length === data.length) {
      setTimeout(() => {
        if (refList && refList?.current) {
          const defaultValue =
            typeof value === 'object' ? _.get(value, valueField) : value;

          const index = _.findIndex(listData, (e: any) =>
            _.isEqual(defaultValue, _.get(e, valueField)),
          );
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

  const showOrClose = useCallback(() => {
    if (!disable) {
      if (keyboardHeight > 0 && visible) {
        return Keyboard.dismiss();
      }
      onMeasure();
      setVisible(!visible);
      setListData(data);

      if (!visible) {
        if (onFocus) {
          onFocus();
        }
      } else {
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

  const onSearch = useCallback(
    (text: string) => {
      if (text.length > 0) {
        const defaultFilterFunction = (e: any) => {
          const item = _.get(e, searchField || labelField)
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

        const propSearchFunction = (e: any) => {
          const labelText = _.get(e, searchField || labelField);

          return searchQuery?.(text, labelText);
        };

        const dataSearch = data.filter(
          searchQuery ? propSearchFunction : defaultFilterFunction,
        );
        setListData(dataSearch);
      } else {
        setListData(data);
      }
    },
    [data, searchField, labelField, searchQuery],
  );

  const onSelect = useCallback(
    (item: any) => {
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
    },
    [
      onChange,
      onSearch,
      eventClose,
      onChangeText,
      confirmSelectItem,
      onConfirmSelectItem,
    ],
  );

  const onCheckPress = useCallback(
    (item: any) => {
      setCurrentValue?.((prev: T[]) => {
        const exists = prev?.some?.(
          (i: any) => i[valueField] === item[valueField],
        );
        const va: T[] = exists
          ? _.filter(prev, i => i?.[valueField] !== item?.[valueField])
          : [...prev, item];
        const v = va?.map(i => i[valueField]);
        onChange?.(
          item[valueField],
          selectionType === 'multi' ? v : item[valueField],
        );
        return va;
      });
    },
    [setCurrentValue, valueField, onChange, currentValue],
  );

  const onClearPress = useCallback(
    (item: T) => {
      const updated = currentValue.filter(
        (i: any) => i[valueField] !== item[valueField],
      );
      const val = currentValue.map((i: any) => i[valueField]);
      setCurrentValue(updated);
      onChange?.(item[valueField] as keyof T, val);
    },
    [currentValue, valueField, onChange, setCurrentValue],
  );

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

export default useDropdown;

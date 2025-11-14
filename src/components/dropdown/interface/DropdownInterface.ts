import React from 'react';
import type {
  StyleProp,
  TextStyle,
  ViewStyle,
  TextProps,
  ImageStyle,
  FlatListProps,
} from 'react-native';
import { ChipInterface } from './ChipInterface';
import { ThemeColors } from '../../../interface/colors.interface';

export type IDropdownRef = {
  open: () => void;
  close: () => void;
};

export type SelectionType = 'single' | 'multi';

export type DropdownProps<S, T extends SelectionType> = {
  data: S[];
  testID?: string;
  search?: boolean;
  disable?: boolean;
  selectionType?: T;
  maxHeight?: number;
  iconColor?: string;
  minHeight?: number;
  inverted?: boolean;
  fontFamily?: string;
  labelField: keyof S;
  valueField: keyof S;
  onBlur?: () => void;
  placeholder?: string;
  onFocus?: () => void;
  autoScroll?: boolean;
  searchField?: keyof S;
  value?: S[] | undefined;
  itemTestIDField?: string;
  backgroundColor?: string;
  keyboardAvoiding?: boolean;
  searchPlaceholder?: string;
  label?: string | undefined;
  confirmSelectItem?: boolean;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
  selectedTextProps?: TextProps;
  subfixIcon?: React.JSX.Element;
  onClear?: (id?: number) => void;
  activeColor?: keyof ThemeColors;
  iconStyle?: StyleProp<ImageStyle>;
  chipContainerProps?: ChipInterface;
  checkIconColor?: keyof ThemeColors;
  radioIconColor?: keyof ThemeColors;
  multiSelectIcon?: React.JSX.Element;
  mode?: 'default' | 'modal' | 'auto';
  itemTextStyle?: StyleProp<TextStyle>;
  itemAccessibilityLabelField?: string;
  labelContainer?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelTextStyle?: StyleProp<TextStyle>;
  showsVerticalScrollIndicator?: boolean;
  placeholderStyle?: StyleProp<TextStyle>;
  inputSearchStyle?: StyleProp<TextStyle>;
  onChangeText?: (search: string) => void;
  onConfirmSelectItem?: (item: T) => void;
  selectedTextStyle?: StyleProp<TextStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  dropdownPosition?: 'auto' | 'top' | 'bottom';
  ref?: React.RefObject<IDropdownRef> | null | undefined;
  searchQuery?: (keyword: string, labelValue: string) => boolean;
  flatListProps?: Omit<FlatListProps<any>, 'renderItem' | 'data'>;
  renderLeftIcon?: (visible?: boolean) => React.JSX.Element | null | undefined;
  renderRightIcon?: (visible?: boolean) => React.JSX.Element | null | undefined;
  renderItem?: (
    item: S,
    selected?: boolean,
    labelField?: keyof S,
    valueField?: keyof S,
  ) => React.JSX.Element | null | undefined;
  renderInputSearch?: (
    onSearch: (text: string) => void,
  ) => React.JSX.Element | null | undefined;
  onChange?: (
    selecteValue?: keyof S,
    selectedList?: SelectionType extends 'single' | 'multi' ? S[] : S,
  ) => void;
};

export interface IUseDetectDevice {
  isIOS: boolean;
  isTablet: boolean;
  isAndroid: boolean;
}

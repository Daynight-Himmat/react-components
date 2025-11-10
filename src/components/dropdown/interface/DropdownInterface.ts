import React from 'react';
import type {
  StyleProp,
  TextStyle,
  ViewStyle,
  TextProps,
  ImageStyle,
  FlatListProps,
} from 'react-native';
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
  subfixIcon?: React.JSX.Element;
  onClear?: (id?: number) => void;
  multiSelectIcon?:React.JSX.Element;
  checkIconColor?: keyof ThemeColors;
  radioIconColor?: keyof ThemeColors;
  onChange?: (
    selecteValue?: keyof S,
    selectedList?: SelectionType extends 'single' | 'multi' ? S[] : S,
  ) => void;
  selectedTextProps?: TextProps;
  activeColor?: keyof ThemeColors;
  iconStyle?: StyleProp<ImageStyle>;
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
  renderRightIcon?: (visible?: boolean) => React.JSX.Element | null | undefined;
  renderLeftIcon?: (visible?: boolean) => React.JSX.Element | null | undefined;
  renderItem?: (
    item: S,
    selected?: boolean,
  ) => React.JSX.Element | null | undefined;
  renderInputSearch?: (
    onSearch: (text: string) => void,
  ) => React.JSX.Element | null | undefined;
};

export interface IUseDetectDevice {
  isAndroid: boolean;
  isIOS: boolean;
  isTablet: boolean;
}

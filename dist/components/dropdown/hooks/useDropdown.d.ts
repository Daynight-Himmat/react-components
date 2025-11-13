import { View, FlatList } from 'react-native';
import { DropdownProps } from '../interface/DropdownInterface';
declare const useDropdown: <T, Mode extends "single" | "multi">(props: DropdownProps<T, Mode>) => {
    ref: import("react").RefObject<View | null>;
    font: () => {
        fontFamily: string;
    } | {
        fontFamily?: undefined;
    };
    refList: import("react").RefObject<FlatList<any> | null>;
    visible: boolean;
    position: any;
    onSelect: (item: any) => void;
    onSearch: (text: string) => void;
    listData: T[];
    onMeasure: () => void;
    searchText: string;
    showOrClose: () => void;
    scrollIndex: () => void;
    currentValue: any;
    onCheckPress: (item: any) => void;
    onClearPress: (item: T) => void;
    setSearchText: import("react").Dispatch<import("react").SetStateAction<string>>;
    keyboardHeight: number;
};
export default useDropdown;

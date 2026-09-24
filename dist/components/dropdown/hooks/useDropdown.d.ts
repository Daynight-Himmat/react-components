import { FlatList } from 'react-native';
import { DropdownProps, SELECTIONS_TYPE } from '../interface/DropdownInterface';
declare const useDropdown: <T, Mode extends SELECTIONS_TYPE>(props: DropdownProps<T, Mode>) => {
    ref: import("react").RefObject<((props: Omit<import("react-native").ViewProps, keyof {
        ref?: React.Ref<import("react-native").ViewInstance> | undefined;
    }> & {
        ref?: React.Ref<import("react-native").ViewInstance> | undefined;
    }) => React.ReactNode) | null>;
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

import { ColorValue } from 'react-native';
export interface ChipInterface {
    label?: string;
    chipColor?: ColorValue;
    textColor?: ColorValue;
    clearIcon?: React.JSX.Element;
    onClearPress?: (item?: any) => void;
}

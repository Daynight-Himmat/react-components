import { ColorValue, TextStyle } from 'react-native';
interface props {
    size?: number;
    style?: TextStyle;
    color?: ColorValue;
    type?: 'error' | 'normal';
}
export declare const useAppTextStyle: ({ size, color, type, }: props) => Readonly<{
    container: {
        fontSize: number;
        color: string | number | import("react-native").NativeColorValue;
    };
    require: {
        color: string;
    };
}>;
export {};

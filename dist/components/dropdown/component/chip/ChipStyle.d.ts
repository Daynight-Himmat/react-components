import { ChipInterface } from '../../interface/ChipInterface';
declare const useChipStyle: (props: ChipInterface) => {
    styles: {
        box: {
            elevation: number;
            width: "auto";
            borderRadius: number;
            flexDirection: "row";
            alignItems: "center";
            justifyContent: "center";
            backgroundColor: import("react-native").ColorValue;
            margin: number;
            height: number;
        } | {
            elevation: number;
            width: "auto";
            borderRadius: number;
            flexDirection: "row";
            alignItems: "center";
            justifyContent: "center";
            backgroundColor: import("react-native").ColorValue;
            shadowRadius?: undefined;
            shadowOpacity?: undefined;
            shadowColor?: undefined;
            shadowOffset?: undefined;
            margin: number;
            height: number;
        } | {
            elevation: number;
            width: "auto";
            borderRadius: number;
            flexDirection: "row";
            alignItems: "center";
            justifyContent: "center";
            backgroundColor: import("react-native").ColorValue;
            shadowRadius: number;
            shadowOpacity: number;
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            margin: number;
            height: number;
        };
        chipText: {
            paddingLeft: number;
            fontWeight: "600";
        };
        clearContainer: {
            width: number;
            height: number;
            borderWidth: number;
            borderRadius: number;
            marginHorizontal: number;
            alignItems: "center";
            justifyContent: "center";
            borderColor: import("react-native").ColorValue;
            backgroundColor: import("react-native").ColorValue;
        };
        clearIcon: {
            width: number;
            height: number;
            borderRadius: number;
            alignItems: "center";
            justifyContent: "center";
        };
    };
    colors: {
        blue: string;
        gray: string;
        error: string;
        green: string;
        white: string;
        black: string;
        primary: string;
        lightGray: string;
        grayishBlue: string;
        red: string;
        border: string;
    };
};
export default useChipStyle;

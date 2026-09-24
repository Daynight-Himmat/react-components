import { ColorValue } from 'react-native';
interface Props {
    size?: number;
    radioIconColor?: ColorValue;
    checkIconColor?: ColorValue;
}
export declare const useDropdownStyle: (props: Props) => {
    styles: Readonly<{
        mainContainer: {
            width: string;
        };
        mainWrap: {
            borderWidth: number;
            borderRadius: number;
            paddingHorizontal: number;
            justifyContent: "center";
            borderColor: string;
        };
        container: {
            flexShrink: number;
            borderWidth: number;
            borderColor: string;
            shadowColor: string;
            backgroundColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            elevation: number;
            shadowOpacity: number;
            shadowRadius: number;
        };
        flex1: {
            flex: number;
        };
        flexShrink: {
            flexShrink: number;
        };
        wrapTop: {
            justifyContent: "flex-end";
        };
        dropdown: {
            minHeight: number;
            maxHeight: number;
            alignItems: "center";
            justifyContent: "space-between";
            flexDirection: "row" | "row-reverse";
        };
        title: {
            fontSize: number;
            color: string;
            marginVertical: number;
            writingDirection: "ltr" | "rtl";
        };
        item: {
            padding: number;
            alignItems: "center";
            borderBottomWidth: number;
            borderColor: string;
            justifyContent: "space-between";
            flexDirection: "row" | "row-reverse";
        };
        textItem: {
            flex: number;
            fontSize: number;
            color: string;
            writingDirection: "ltr" | "rtl";
        };
        icon: {
            width: number;
            height: number;
        };
        input: {
            margin: number;
            height: number;
            borderWidth: number;
            borderColor: string;
            marginBottom: number;
            paddingHorizontal: number;
        };
        fullScreen: {
            alignItems: "center";
            justifyContent: "center";
        };
        labelContainer: {
            marginBottom: number;
            paddingVertical: number;
        };
        labelTextStyle: {
            color: string;
        };
        itemIconContainer: {
            borderWidth: number;
            marginRight: number;
            borderRadius: number;
            width: number;
            height: number;
            alignItems: "center";
            justifyContent: "center";
            padding: number;
            borderColor: string | number | import("react-native").NativeColorValue;
        };
        iconSubContainer: {
            width: string;
            height: string;
            borderRadius: number;
            backgroundColor: string | number | import("react-native").NativeColorValue;
        };
        styleHorizontal: {
            width: string | number;
            alignSelf: "center";
        };
        styleContainerVertical: {
            alignItems: "center";
            backgroundColor: string;
        };
        checkContainer: {
            borderWidth: number;
            borderRadius: number;
            marginRight: number;
            width: number;
            height: number;
            alignItems: "center";
            justifyContent: "center";
            borderColor: string | number | import("react-native").NativeColorValue;
        };
        showMultiSelectContainer: {
            width: string;
            height: string;
            maxHeight: number;
        };
        wraps: {
            flexWrap: "wrap";
            paddingVertical: number;
            flexDirection: "row";
            paddingHorizontal: number;
        };
    }>;
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
export {};

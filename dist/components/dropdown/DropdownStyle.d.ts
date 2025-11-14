import { ThemeColors } from '../../interface/colors.interface';
interface Props {
    size?: number;
    radioIconColor?: keyof ThemeColors;
    checkIconColor?: keyof ThemeColors;
}
export declare const useDropdownStyle: (props: Props) => {
    styles: {
        mainContainer: {
            width: "100%";
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
            borderColor: string;
        };
        iconSubContainer: {
            width: "100%";
            height: "100%";
            borderRadius: number;
            backgroundColor: string;
        };
        styleHorizontal: {
            width: number | "100%";
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
            borderColor: string;
        };
        showMultiSelectContainer: {
            width: "90%";
            height: "auto";
            maxHeight: number;
        };
        wraps: {
            flexWrap: "wrap";
            paddingVertical: number;
            flexDirection: "row";
            paddingHorizontal: number;
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
export {};

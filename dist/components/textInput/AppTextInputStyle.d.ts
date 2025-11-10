import { ReactNode } from 'react';
import { PressableStateCallbackType } from 'react-native';
interface props {
    type?: any;
    editable?: boolean;
    leftIcon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
    rightIcon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
}
export declare const useAppTextInputStyle: ({ type, leftIcon, editable, }: props) => {
    styles: {
        container: {
            flexDirection: "row";
            alignItems: "center";
            opacity: number;
            backgroundColor: string;
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
            width: "100%";
        };
        margin: {
            marginBottom: number;
        };
        rightIcon: {
            position: "absolute";
            right: number;
        };
        error: {
            textAlign: "left";
            paddingTop: number;
            alignSelf: "flex-start";
            color: string;
        };
        label: {
            color: string;
            marginBottom: number;
            alignSelf: "flex-start";
            marginTop: number;
        };
        required: {
            color: string;
        };
        errorWrapper: {
            borderWidth: number;
            borderColor: string;
        };
        textInputStyles: {
            padding: number;
            height: number;
            width: "100%";
            color: string;
            paddingLeft: number;
            paddingRight: number;
        };
        leftIcon: {
            position: "absolute";
            left: number;
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const style_1 = require("../../../../style");
const react_native_1 = require("react-native");
const useChipStyle = (props) => {
    const { chipColor } = props;
    const { ...colors } = style_1.LIGHT_COLORS;
    const styles = (0, react_1.useMemo)(() => {
        return react_native_1.StyleSheet.create({
            box: {
                margin: 4,
                height: 26,
                ...react_native_1.Platform.select({
                    android: {
                        elevation: 5,
                    },
                    ios: {
                        shadowRadius: 1.84,
                        shadowOpacity: 0.25,
                        shadowColor: colors.black,
                        shadowOffset: { width: 0, height: 2 },
                    },
                }),
                elevation: 5,
                width: 'auto',
                borderRadius: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: chipColor ? colors[chipColor] : colors.lightGray,
            },
            chipText: {
                paddingLeft: 10,
                fontWeight: '600',
            },
            clearContainer: {
                width: 18,
                height: 18,
                borderWidth: 1,
                borderRadius: 100,
                marginHorizontal: 4,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: colors.white,
                backgroundColor: chipColor ? colors[chipColor] : colors.lightGray,
            },
            clearIcon: {
                height: 12,
                width: 12,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.white,
            },
        });
    }, [chipColor, colors]);
    return {
        styles,
        colors,
    };
};
exports.default = useChipStyle;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeviceOrientation = useDeviceOrientation;
const react_1 = require("react");
const react_native_1 = require("react-native");
const isOrientationPortrait = ({ width, height }) => height >= width;
const isOrientationLandscape = ({ width, height }) => width >= height;
function useDeviceOrientation() {
    const screen = react_native_1.Dimensions.get('screen');
    const initialState = {
        portrait: isOrientationPortrait(screen),
        landscape: isOrientationLandscape(screen),
    };
    const [orientation, setOrientation] = (0, react_1.useState)(initialState);
    (0, react_1.useEffect)(() => {
        const onChange = ({ screen: screens }) => {
            setOrientation({
                portrait: isOrientationPortrait(screens),
                landscape: isOrientationLandscape(screens),
            });
        };
        const subscription = react_native_1.Dimensions.addEventListener('change', onChange);
        return () => {
            if (typeof subscription?.remove === 'function') {
                subscription.remove();
            }
        };
    }, []);
    return orientation.portrait ? 'PORTRAIT' : 'LANDSCAPE';
}

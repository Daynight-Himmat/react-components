import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
const isOrientationPortrait = ({ width, height }) => height >= width;
const isOrientationLandscape = ({ width, height }) => width >= height;
export function useDeviceOrientation() {
    const screen = Dimensions.get('screen');
    const initialState = {
        portrait: isOrientationPortrait(screen),
        landscape: isOrientationLandscape(screen),
    };
    const [orientation, setOrientation] = useState(initialState);
    useEffect(() => {
        const onChange = ({ screen: screens }) => {
            setOrientation({
                portrait: isOrientationPortrait(screens),
                landscape: isOrientationLandscape(screens),
            });
        };
        const subscription = Dimensions.addEventListener('change', onChange);
        return () => {
            if (typeof subscription?.remove === 'function') {
                subscription.remove();
            }
        };
    }, []);
    return orientation.portrait ? 'PORTRAIT' : 'LANDSCAPE';
}

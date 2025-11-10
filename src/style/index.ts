export * from './colors';
export * from './spacing';
export * from './shadow';
import { Dimensions, Platform } from 'react-native';

export const addAlphaToHex = (color: string, opacity: number) => {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const MIN_DEVICE_WIDTH = Platform.OS === 'ios' ? 390 : 360;


import { ThemeInterface } from "../interface/colors.interface";

export const LIGHT_COLORS = {
  blue: '#0000ff',
  gray: '#5c5b5b',
  error: '#dc3545',
  green: '#2EB85C',
  white: '#FFFFFF',
  black: '#000000',
  primary: '#3683BC',
  lightGray: '#e0e0e0',
  grayishBlue: '#C5C6C7',
  red: 'rgba(205, 46, 49, 1)',
  border: 'rgba(224, 224, 224, 1)',
};

export const DARK_COLORS = {
  blue: '#0000ff',
  gray: '#5c5b5b',
  error: '#dc3545',
  green: '#2EB85C',
  white: '#FFFFFF',
  black: '#000000',
  primary: '#3683BC',
  lightGray: '#e0e0e0',
  grayishBlue: '#C5C6C7',
  red: 'rgba(205, 46, 49, 1)',
  border: 'rgba(224, 224, 224, 1)',
};

export const THEMES: ThemeInterface = {
  light: {
    mode: 'light',
    colors: LIGHT_COLORS,
  },
  dark: {
    mode: 'dark',
    colors: DARK_COLORS,
  },
};

export const DEFAULT_COLORS = {
  blue: '#3683BC',
  white: '#FFFFFF',
  blackOpacity: 'rgba(0, 0, 0, 0.5)',
};

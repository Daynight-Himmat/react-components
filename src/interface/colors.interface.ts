export type ThemeColors = {
  red: string;
  blue: string;
  gray: string;
  white: string;
  error: string;
  black: string;
  green: string;
  border: string;
  primary: string;
  lightGray: string;
  grayishBlue: string;
};

export type Theme = {
  mode: string;
  colors: ThemeColors;
};

export interface ThemeInterface {
  [index: string]: Theme;
}

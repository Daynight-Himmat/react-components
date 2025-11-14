import { ColorValue } from "react-native";

export interface ChipInterface {
  label?: string;
  chipColor?: ColorValue;
  textColor?: ColorValue;
  onClearPress?: () => void;
  clearIcon?: React.JSX.Element;
}

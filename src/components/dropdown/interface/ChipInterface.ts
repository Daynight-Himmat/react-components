import { ColorValue } from "react-native";


export interface ChipInterface {
  label?: string;
  onClearPress?: () => void;
  chipColor?: ColorValue;
  textColor?: ColorValue;
  clearIcon?: React.JSX.Element;
}

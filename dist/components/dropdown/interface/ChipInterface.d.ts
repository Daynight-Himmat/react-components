import { ThemeColors } from '../../../interface/colors.interface';
export interface ChipInterface {
    label?: string;
    onClearPress?: () => void;
    chipColor?: keyof ThemeColors;
    textColor?: keyof ThemeColors;
}

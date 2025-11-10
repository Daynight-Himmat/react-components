import { View } from 'react-native';
import useChipStyle from './ChipStyle';
import AppText from '../../../text/AppText';
import SvgButton from '../../../svgButton/SvgButton';
import { ChipInterface } from '../../interface/ChipInterface';

const Chip = (props: ChipInterface) => {
  const { styles } = useChipStyle({ ...props });
  const { label, onClearPress, textColor, clearIcon } = props;
  return (
    <View style={styles.box}>
      <AppText
        size={12}
        fontFamily={'semiBold'}
        style={styles.chipText}
        color={textColor ? textColor : 'gray'}
      >
        {label}
      </AppText>
      <View style={styles.clearContainer}>
        <SvgButton
          icon={clearIcon}
          onPress={onClearPress}
          style={styles.clearIcon}
        />
      </View>
    </View>
  );
};

export default Chip;

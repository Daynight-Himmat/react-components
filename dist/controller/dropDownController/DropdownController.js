import React from 'react';
import { View } from 'react-native';
import AppText from '../../components/text/AppText';
import DropdownComponent from '../../components/dropdown/Dropdown';
import { useDropdownControllerStyle } from './DropdownControllerStyle';
import { Controller } from 'react-hook-form';
const AppDropdownController = (props) => {
    const { data, label, control, labelField, controller, valueField, placeholder, selectionType, containerStyle, ...rest } = props;
    const { styles } = useDropdownControllerStyle();
    return (<Controller control={control} name={controller} render={({ fieldState: { error }, field: { onBlur, onChange, value }, }) => (<View style={styles.mainContainer}>
          <DropdownComponent data={data} value={value} label={label} onBlur={onBlur} onChange={(selectValue, selectedItem) => {
                if (selectionType === 'multi') {
                    return onChange(selectedItem);
                }
                return onChange(selectValue);
            }} labelField={labelField} valueField={valueField} placeholder={placeholder} selectionType={selectionType} containerStyle={containerStyle} labelTextStyle={styles.labelText} itemTextStyle={styles.dropdownText} placeholderStyle={styles.itemContainer} selectedTextStyle={styles.selectionText} style={[styles.dropdownContainer, error && styles.errorWrapper]} {...rest}/>
          {error && <AppText style={styles.error}>{error?.message}</AppText>}
        </View>)}/>);
};
export default AppDropdownController;

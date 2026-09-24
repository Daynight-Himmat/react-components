import React from 'react';
import { View } from 'react-native';
import AppText from '../../components/text/AppText';
import {
  DropdownProps,
  SELECTIONS_TYPE,
} from '../../components/dropdown/interface/DropdownInterface';
import DropdownComponent from '../../components/dropdown/Dropdown';
import { useDropdownControllerStyle } from './DropdownControllerStyle';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface DropControllerProps<
  U extends FieldValues,
  S,
  T extends SELECTIONS_TYPE = 'single',
> extends DropdownProps<S, T> {
  control: Control<U>;
  controller: Path<U>;
}

const AppDropdownController = <
  U extends FieldValues,
  S,
  T extends SELECTIONS_TYPE = 'single',
>(
  props: DropControllerProps<U, S, T>,
) => {
  const {
    data,
    label,
    control,
    labelField,
    controller,
    valueField,
    placeholder,
    selectionType,
    containerStyle,
    ...rest
  } = props;

  const { styles } = useDropdownControllerStyle();

  return (
    <Controller
      control={control}
      name={controller}
      render={({
        fieldState: { error },
        field: { onBlur, onChange, value },
      }) => (
        <View style={styles.mainContainer}>
          <DropdownComponent
            data={data}
            value={value}
            label={label}
            onBlur={onBlur}
            onChange={(selectValue: any, selectedItem: any) => {
              if (selectionType === 'multi') {
                return onChange(selectedItem);
              }
              return onChange(selectValue);
            }}
            labelField={labelField}
            valueField={valueField}
            placeholder={placeholder}
            selectionType={selectionType}
            containerStyle={containerStyle}
            labelTextStyle={styles.labelText}
            itemTextStyle={styles.dropdownText}
            placeholderStyle={styles.itemContainer}
            selectedTextStyle={styles.selectionText}
            style={[styles.dropdownContainer, error && styles.errorWrapper]}
            {...rest}
          />
          {error && <AppText style={styles.error}>{error?.message}</AppText>}
        </View>
      )}
    />
  );
};

export default AppDropdownController;

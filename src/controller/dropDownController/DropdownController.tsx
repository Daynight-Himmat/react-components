import React from 'react';
import { View } from 'react-native';
import AppText from '../../components/text/AppText';
import {
  DropdownProps,
  SelectionType,
} from '../../components/dropdown/interface/DropdownInterface';
import DropdownComponent from '../../components/dropdown/Dropdown';
import { useDropdownControllerStyle } from './DropdownControllerStyle';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type DropControllerProps<S, T extends SelectionType, U extends FieldValues> = {
  control: Control<U>;
  controller: Path<U>;
  dropProps: DropdownProps<S, T>;
};

const AppDropdownController = <
  S,
  T extends SelectionType,
  U extends FieldValues,
>(
  props: DropControllerProps<S, T, U>,
) => {
  const {
    control,
    controller,
    dropProps: {
      data,
      label,
      labelField,
      valueField,
      placeholder,
      selectionType,
      containerStyle,
      ...rest
    },
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
              if (selectionType === 'single') {
                return onChange(selectValue);
              }
              return onChange(selectedItem);
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

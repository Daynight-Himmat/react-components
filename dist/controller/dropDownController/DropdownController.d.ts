import React from 'react';
import { DropdownProps, SelectionType } from '../../components/dropdown/interface/DropdownInterface';
import { Control, FieldValues, Path } from 'react-hook-form';
type DropControllerProps<S, T extends SelectionType, U extends FieldValues> = {
    control: Control<U>;
    controller: Path<U>;
    dropProps: DropdownProps<S, T>;
};
declare const AppDropdownController: <S, T extends SelectionType, U extends FieldValues>(props: DropControllerProps<S, T, U>) => React.JSX.Element;
export default AppDropdownController;

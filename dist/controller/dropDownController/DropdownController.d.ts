import React from 'react';
import { DropdownProps, SELECTIONS_TYPE } from '../../components/dropdown/interface/DropdownInterface';
import { Control, FieldValues, Path } from 'react-hook-form';
interface DropControllerProps<U extends FieldValues, S, T extends SELECTIONS_TYPE> extends DropdownProps<S, T> {
    control: Control<U>;
    controller: Path<U>;
}
declare const AppDropdownController: <U extends FieldValues, S, T extends SELECTIONS_TYPE>(props: DropControllerProps<U, S, T>) => React.JSX.Element;
export default AppDropdownController;

import React from 'react';
import { DropdownProps, SELECTIONS_TYPE } from './interface/DropdownInterface';
declare const DropdownComponent: <T, Mode extends SELECTIONS_TYPE>(props: DropdownProps<T, Mode>) => React.JSX.Element;
export default DropdownComponent;

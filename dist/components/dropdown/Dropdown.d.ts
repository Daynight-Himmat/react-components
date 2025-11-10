import React from 'react';
import { DropdownProps } from './interface/DropdownInterface';
declare const DropdownComponent: <T, Mode extends "single" | "multi">(props: DropdownProps<T, Mode>) => React.JSX.Element;
export default DropdownComponent;

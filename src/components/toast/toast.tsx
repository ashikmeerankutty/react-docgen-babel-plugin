import React, {
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from 'react';

import { CommonProps, keysOf } from '../common';

import { IconType } from '../icon';

type ToastColor = 'primary' | 'success' | 'warning' | 'danger';

const colorToClassNameMap: { [color in ToastColor]: string } = {
  primary: 'euiToast--primary',
  success: 'euiToast--success',
  warning: 'euiToast--warning',
  danger: 'euiToast--danger',
};

export const COLORS = keysOf(colorToClassNameMap);

export interface EuiToastProps
  extends CommonProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  color?: ToastColor;
  iconType?: IconType;
  onClose?: () => void;
}

export const EuiToast: FunctionComponent<EuiToastProps> = () => {
  return <div>Toast Component</div>
};

import * as React from 'react';

export type Variant = 'minimal' | 'primary' | 'secondary' | 'tertiary';

export type Size = 'compact' | 'default' | 'large' | 'mini';

export type Shape = 'circle' | 'default' | 'pill' | 'round' | 'square';

export interface ButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<any> | undefined;
  href?: string;
  target?: string;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  startEnhancer?: React.ComponentElement<unknown, any> | React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  endEnhancer?: React.ComponentElement<unknown, any> | React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  isSelected?: boolean;
  type?: 'button' | 'reset' | 'submit';
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
}

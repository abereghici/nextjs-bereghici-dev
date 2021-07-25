import {
  layout,
  mediaQuery,
  typography,
  animation,
  sizing,
  lighting,
  borders,
} from '@bereghici/design-system.tokens';

import { Theme } from '../types';
import palette from './palette';

export const LightTheme: Theme = {
  name: 'light-theme',
  colors: palette,
  animation,
  layout,
  borders,
  lighting,
  mediaQuery,
  sizing,
  typography,
};

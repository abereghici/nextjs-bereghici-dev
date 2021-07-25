import {
  mediaQuery,
  typography,
  animation,
  sizing,
  lighting,
  borders,
  layout,
} from '@bereghici/design-system.tokens';

import { Theme } from '../types';
import palette from './palette';

export const DarkTheme: Theme = {
  name: 'dark-theme',
  colors: palette,
  animation,
  borders,
  lighting,
  mediaQuery,
  layout,
  sizing,
  typography,
};

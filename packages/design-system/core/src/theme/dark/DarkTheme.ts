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
import semanticColors from './semanticColors';

export const DarkTheme: Theme = {
  name: 'dark-theme',
  colors: semanticColors,
  animation,
  borders,
  direction: 'auto',
  lighting,
  mediaQuery,
  layout,
  sizing,
  typography,
};

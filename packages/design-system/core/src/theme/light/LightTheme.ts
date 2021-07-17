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
import semanticColors from './semanticColors';

export const LightTheme: Theme = {
  name: 'light-theme',
  colors: semanticColors,
  animation,
  layout,
  borders,
  direction: 'auto',
  lighting,
  mediaQuery,
  sizing,
  typography,
};

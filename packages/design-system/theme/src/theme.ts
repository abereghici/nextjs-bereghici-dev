import type {
  Layout,
  Animation,
  MediaQueries,
  Typography,
  Sizing,
  Lighting,
  Borders,
} from '@bereghici/design-system.primitives';
import {
  layout,
  mediaQueries,
  typography,
  sizing,
  animation,
  lighting,
} from '@bereghici/design-system.primitives';

import { palette, Palette } from './palette';
import { borders } from './borders';

export interface Theme {
  layout: Layout;
  mediaQueries: MediaQueries;
  colors: Palette;
  typography: Typography;
  sizing: Sizing;
  lighting: Lighting;
  animation: Animation;
  borders: Borders;
}

export const theme: Theme = {
  layout,
  mediaQueries,
  typography,
  sizing,
  lighting,
  animation,
  borders,
  colors: palette,
};

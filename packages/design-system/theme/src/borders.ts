import {
  borders as primitiveBorders,
  Borders,
} from '@bereghici/design-system.primitives';
import { deepMerge } from '@bereghici/design-system.utils/deep-merge';

export const borders = deepMerge({}, primitiveBorders, {
  border100: {
    borderColor: `var(--border100Color)`,
  },
  border200: {
    borderColor: `var(--border200Color)`,
  },
  border300: {
    borderColor: `var(--border300Color)`,
  },
  border400: {
    borderColor: `var(--border400Color)`,
  },
  border500: {
    borderColor: `var(--border500Color)`,
  },
  border600: {
    borderColor: `var(--border600Color)`,
  },
}) as Borders;

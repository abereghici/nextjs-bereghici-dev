export * from './theme-provider';

export { DetectThemeScript } from './detect-theme-script';

// Reexport fontUrl to allow design system consumers to access font settings but control how and
// where they load the font.
export {
  primaryFontUrl,
  monoFontUrl,
} from '@bereghici/design-system.primitives';

export type { Palette } from './palette';

export type {
  Layout,
  Animation,
  MediaQueries,
  Typography,
  Sizing,
  Lighting,
  Borders,
} from '@bereghici/design-system.primitives';

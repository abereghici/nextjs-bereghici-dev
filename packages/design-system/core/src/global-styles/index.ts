export * from './GlobalStyles';

// Reexport fontUrl to allow design system consumers to access font settings but control how and
// where they load the font.
export { primaryFontUrl, monoFontUrl } from '@bereghici/design-system.tokens';

import { replaceObjectValuesWithOwnKeysAsCSSVars } from './utils';
import { rawLightPalette } from './light-palette';

export type Palette = {
  // Background
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  backgroundInversePrimary: string;
  backgroundInverseSecondary: string;
  backgroundStateDisabled: string;
  backgroundOverlayDark: string | null;
  backgroundOverlayLight: string | null;
  backgroundAccent: string;
  backgroundNegative: string;
  backgroundWarning: string;
  backgroundPositive: string;
  backgroundLightAccent: string;
  backgroundLightPositive: string;
  backgroundLightNegative: string;
  backgroundLightWarning: string;
  backgroundAlwaysDark: string;
  backgroundAlwaysLight: string;

  // Content
  contentPrimary: string;
  contentSecondary: string;
  contentTertiary: string;
  contentInversePrimary: string;
  contentInverseSecondary: string;
  contentInverseTertiary: string;
  contentStateDisabled: string;
  contentAccent: string;
  contentOnColor: string;
  contentOnColorInverse: string;
  contentNegative: string;
  contentWarning: string;
  contentPositive: string;

  // Border
  borderOpaque: string;
  borderTransparent: string | null;
  borderSelected: string;
  borderInverseOpaque: string;
  borderInverseTransparent: string | null;
  borderInverseSelected: string;
  borderStateDisabled: string;
  borderAccent: string;
  borderAccentLight: string;
  borderNegative: string;
  borderWarning: string;
  borderPositive: string;
  border100Color: string;
  border200Color: string;
  border300Color: string;
  border400Color: string;
  border500Color: string;
  border600Color: string;

  // Links
  linkText: string;
  linkVisited: string;
  linkHover: string;
  linkActive: string;

  // Buttons
  buttonPrimaryFill: string;
  buttonPrimaryText: string;
  buttonPrimaryHover: string;
  buttonPrimaryActive: string;
  buttonPrimarySelectedText: string;
  buttonPrimarySelectedFill: string;
  buttonPrimarySpinnerForeground: string;
  buttonPrimarySpinnerBackground: string;
  buttonSecondaryFill: string;
  buttonSecondaryText: string;
  buttonSecondaryHover: string;
  buttonSecondaryActive: string;
  buttonSecondarySelectedText: string;
  buttonSecondarySelectedFill: string;
  buttonSecondarySpinnerForeground: string;
  buttonSecondarySpinnerBackground: string;
  buttonTertiaryFill: string;
  buttonTertiaryText: string;
  buttonTertiaryHover: string;
  buttonTertiaryActive: string;
  buttonTertiarySelectedText: string;
  buttonTertiarySelectedFill: string;
  buttonTertiarySpinnerForeground: string;
  buttonTertiarySpinnerBackground: string;
  buttonMinimalFill: string;
  buttonMinimalText: string;
  buttonMinimalHover: string;
  buttonMinimalActive: string;
  buttonMinimalSelectedText: string;
  buttonMinimalSelectedFill: string;
  buttonMinimalSpinnerForeground: string;
  buttonMinimalSpinnerBackground: string;
  buttonDisabledFill: string;
  buttonDisabledText: string;
  buttonDisabledSpinnerForeground: string;
  buttonDisabledSpinnerBackground: string;

  // Header
  headerBackground: string;
};

// Create css variables from light palette.
export const palette = replaceObjectValuesWithOwnKeysAsCSSVars(
  rawLightPalette
) as Palette;

import { colors } from '@bereghici/design-system.tokens';

import { hexToRgba } from '../../utils/colors';
import type { SemanticColors } from '../types';

const semanticColors: SemanticColors = {
  backgroundPrimary: colors.white,
  backgroundSecondary: colors.gray50,
  backgroundTertiary: colors.gray100,
  backgroundInversePrimary: colors.black,
  backgroundInverseSecondary: colors.gray800,
  backgroundStateDisabled: colors.gray50,
  backgroundOverlayDark: hexToRgba(colors.black, '0.3'),
  backgroundOverlayLight: hexToRgba(colors.black, '0.08'),
  backgroundAccent: colors.blue400,
  backgroundNegative: colors.red400,
  backgroundWarning: colors.yellow400,
  backgroundPositive: colors.green500,
  backgroundLightAccent: colors.blue50,
  backgroundLightNegative: colors.red50,
  backgroundLightWarning: colors.yellow50,
  backgroundLightPositive: colors.green50,
  backgroundAlwaysDark: colors.black,
  backgroundAlwaysLight: colors.white,

  // Content
  contentPrimary: colors.black,
  contentSecondary: colors.gray600,
  contentTertiary: colors.gray500,
  contentInversePrimary: colors.white,
  contentInverseSecondary: colors.gray300,
  contentInverseTertiary: colors.gray400,
  contentStateDisabled: colors.gray400,
  contentAccent: colors.blue400,
  contentOnColor: colors.white,
  contentOnColorInverse: colors.black,
  contentNegative: colors.red400,
  contentWarning: colors.yellow700,
  contentPositive: colors.green500,

  // Border
  borderOpaque: colors.gray200,
  borderTransparent: hexToRgba(colors.black, '0.08'),
  borderSelected: colors.black,
  borderInverseOpaque: colors.gray700,
  borderInverseTransparent: hexToRgba(colors.white, '0.2'),
  borderInverseSelected: colors.white,
  borderStateDisabled: colors.gray50,
  borderAccent: colors.blue400,
  borderAccentLight: colors.blue200,
  borderNegative: colors.red200,
  borderWarning: colors.yellow200,
  borderPositive: colors.green200,

  // Links
  linkText: colors.black,
  linkVisited: colors.gray700,
  linkHover: colors.gray600,
  linkActive: colors.gray500,

  // Buttons
  buttonPrimaryFill: colors.black,
  buttonPrimaryText: colors.white,
  buttonPrimaryHover: colors.gray700,
  buttonPrimaryActive: colors.gray600,
  buttonPrimarySelectedFill: colors.gray600,
  buttonPrimarySelectedText: colors.white,
  buttonPrimarySpinnerForeground: colors.gray50,
  buttonPrimarySpinnerBackground: colors.gray500,

  buttonSecondaryFill: colors.gray100,
  buttonSecondaryText: colors.black,
  buttonSecondaryHover: colors.gray200,
  buttonSecondaryActive: colors.gray300,
  buttonSecondarySelectedFill: colors.gray300,
  buttonSecondarySelectedText: colors.black,
  buttonSecondarySpinnerForeground: colors.gray700,
  buttonSecondarySpinnerBackground: colors.gray300,

  buttonTertiaryFill: 'transparent',
  buttonTertiaryText: colors.black,
  buttonTertiaryHover: colors.gray50,
  buttonTertiaryActive: colors.gray100,
  buttonTertiarySelectedFill: colors.gray100,
  buttonTertiarySelectedText: colors.black,
  buttonTertiarySpinnerForeground: colors.gray700,
  buttonTertiarySpinnerBackground: colors.gray300,

  buttonMinimalFill: 'transparent',
  buttonMinimalText: colors.black,
  buttonMinimalHover: colors.gray50,
  buttonMinimalActive: colors.gray100,
  buttonMinimalSelectedFill: colors.gray100,
  buttonMinimalSelectedText: colors.black,
  buttonMinimalSpinnerForeground: colors.gray700,
  buttonMinimalSpinnerBackground: colors.gray300,

  buttonDisabledFill: colors.gray50,
  buttonDisabledText: colors.gray400,
  buttonDisabledSpinnerForeground: colors.gray400,
  buttonDisabledSpinnerBackground: colors.gray200,
};

export default semanticColors;

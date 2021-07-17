import { colors } from '@bereghici/design-system.tokens';

import { hexToRgba } from '../../utils/colors';
import type { SemanticColors } from '../types';

const semanticColors: SemanticColors = {
  // Background
  backgroundPrimary: colors.gray900,
  backgroundSecondary: colors.gray800,
  backgroundTertiary: colors.gray700,
  backgroundInversePrimary: colors.gray200,
  backgroundInverseSecondary: colors.gray300,
  backgroundStateDisabled: colors.gray800,
  backgroundOverlayDark: hexToRgba(colors.black, '0.3'),
  backgroundOverlayLight: hexToRgba(colors.black, '0.08'),
  backgroundAccent: colors.blue400,
  backgroundNegative: colors.red500,
  backgroundWarning: colors.yellow500,
  backgroundPositive: colors.green400,
  backgroundLightAccent: colors.blue700,
  backgroundLightPositive: colors.green700,
  backgroundLightNegative: colors.red700,
  backgroundLightWarning: colors.yellow700,
  backgroundAlwaysDark: colors.gray900,
  backgroundAlwaysLight: colors.gray100,

  // Content
  contentPrimary: colors.gray200,
  contentSecondary: colors.gray400,
  contentTertiary: colors.gray500,
  contentInversePrimary: colors.gray900,
  contentInverseSecondary: colors.gray600,
  contentInverseTertiary: colors.gray500,
  contentStateDisabled: colors.gray600,
  contentAccent: colors.blue300,
  contentOnColor: colors.white,
  contentOnColorInverse: colors.black,
  contentNegative: colors.red300,
  contentWarning: colors.yellow300,
  contentPositive: colors.green300,

  // Border
  borderStateDisabled: colors.gray800,
  borderAccent: colors.blue400,
  borderAccentLight: colors.blue500,
  borderNegative: colors.red500,
  borderWarning: colors.yellow500,
  borderPositive: colors.green500,
  borderOpaque: colors.gray700,
  borderTransparent: hexToRgba(colors.gray200, '0.08'),
  borderSelected: colors.gray200,
  borderInverseOpaque: colors.gray400,
  borderInverseTransparent: hexToRgba(colors.gray900, '0.2'),
  borderInverseSelected: colors.gray900,

  // Links
  linkText: colors.white,
  linkVisited: colors.gray100,
  linkHover: colors.gray200,
  linkActive: colors.gray300,
};

export default semanticColors;

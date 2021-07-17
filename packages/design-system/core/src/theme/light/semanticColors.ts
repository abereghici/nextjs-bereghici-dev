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
};

export default semanticColors;

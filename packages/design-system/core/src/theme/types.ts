import type {
  Layout,
  Animation,
  MediaQuery,
  Typography,
  Sizing,
  Lighting,
  Borders,
} from '@bereghici/design-system.tokens';

export type SemanticColors = {
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

  // Links
  linkText: string;
  linkVisited: string;
  linkHover: string;
  linkActive: string;
};

export interface Theme {
  name: string;
  direction: 'auto' | 'ltr' | 'rtl';
  layout: Layout;
  mediaQuery: MediaQuery;
  colors: SemanticColors;
  typography: Typography;
  sizing: Sizing;
  lighting: Lighting;
  animation: Animation;
  borders: Borders;
}

export const mediaQueries = {
  mobile: `@media (max-width: 47.938em)`,
  tablet: `@media (min-width: 48em)`,
  desktop: `@media (min-width: 64em)`,
  desktopLarge: `@media (min-width: 74em)`,
  tabletOnly: `@media (min-width: 48em) and (max-width: 63.938em)`,
  tabletOrSmaller: `@media (max-width: 63.938em)`,
} as const;

export type MediaQueries = typeof mediaQueries;

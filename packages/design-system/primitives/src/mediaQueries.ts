export const mediaQueries = {
  mobile: `@media (max-width: 767px)`,
  tablet: `@media (min-width: 768px)`,
  desktop: `@media (min-width: 1024px)`,
  desktopLarge: `@media (min-width: 1184px)`,
  tabletOnly: `@media (min-width: 768px) and (max-width: 1023px)`,
  tabletOrSmaller: `@media (max-width: 1023px)`,
} as const;

export type MediaQueries = typeof mediaQueries;

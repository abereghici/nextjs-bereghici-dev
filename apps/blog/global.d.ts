declare module '@emotion/react' {
  import { Theme as BaseTheme } from '@bereghici/design-system.core/dist/theme';

  export type Theme = BaseTheme;
  export * from '@emotion/react/types/index';
}

interface Window {
  dataLayer?: Array<unknown> | null;
}

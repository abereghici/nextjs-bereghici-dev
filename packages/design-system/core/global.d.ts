import { Theme as BaseTheme } from './src/theme';

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}

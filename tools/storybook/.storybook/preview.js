import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withPerformance } from 'storybook-addon-performance';

import { GlobalStyles } from '@bereghici/design-system.global-styles';
import { ThemeProvider } from '@bereghici/design-system.theme';
import '@bereghici/design-system.primitives/fonts/inter.css';
import '@bereghici/design-system.primitives/fonts/ubuntu.css';

const withThemeProvider = Story => (
  <ThemeProvider>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

export const decorators = [withThemeProvider, withPerformance];

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

import * as React from 'react';

import { THEME_STORAGE_KEY, THEME_DATA_ATTRIBUTE } from './constants';

export const DetectThemeScript = () => {
  const codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
        let persistedColorPreference;
        try {
          persistedColorPreference = JSON.parse(window.localStorage.getItem('${THEME_STORAGE_KEY}'));
        }catch(e) {
          console.error(e);
        }
        const hasPersistedPreference = typeof persistedColorPreference === 'string';

        if (hasPersistedPreference) {
          return persistedColorPreference;
        }

        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light';
        }
        return 'light';
    }
    const colorMode = getInitialColorMode();
    document.body.setAttribute('${THEME_DATA_ATTRIBUTE}', colorMode);
  })()`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

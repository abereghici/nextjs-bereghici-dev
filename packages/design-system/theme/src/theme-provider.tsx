import * as React from 'react';
import { Global, SerializedStyles } from '@emotion/react';
import { localStorage } from '@bereghici/storage';

import { THEME_STORAGE_KEY, THEME_DATA_ATTRIBUTE } from './constants';
import { darkPalette } from './dark-palette';
import { lightPalette } from './light-palette';
import { theme } from './theme';

type ThemeTypes = 'dark' | 'light';

const palettes: Record<ThemeTypes, SerializedStyles> = {
  dark: darkPalette,
  light: lightPalette,
};

const ThemeContext =
  React.createContext<[ThemeTypes, (theme: ThemeTypes) => void] | undefined>(
    undefined
  );

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = React.useState<ThemeTypes>('light');

  const setTheme = React.useCallback((newThemeName: ThemeTypes) => {
    localStorage.set(THEME_STORAGE_KEY, newThemeName);
    document.body.setAttribute(THEME_DATA_ATTRIBUTE, newThemeName);
    setThemeName(newThemeName);
  }, []);

  const value = React.useMemo<[ThemeTypes, (theme: ThemeTypes) => void]>(
    () => [themeName, setTheme],
    [themeName, setTheme]
  );

  React.useEffect(() => {
    const colorMode = window.document.body.getAttribute(THEME_DATA_ATTRIBUTE);
    setThemeName(colorMode === 'dark' ? 'dark' : 'light');
  }, []);

  React.useEffect(() => {
    const onThemeChange = (e: MediaQueryListEvent) => {
      const colorPreference = e.matches ? 'dark' : 'light';

      setTheme(colorPreference);
    };

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener('change', onThemeChange);

    return () => {
      mql.removeEventListener('change', onThemeChange);
    };
  }, [setTheme]);

  return (
    <>
      <Global
        styles={Object.entries(palettes).map(([mode, cssVars]) => ({
          [`body[${THEME_DATA_ATTRIBUTE}=${mode}]`]: cssVars,
        }))}
      />
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
}

function useThemeName() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useThemeName, theme };

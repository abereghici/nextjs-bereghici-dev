import * as React from 'react';
import { ThemeContext } from '@emotion/react';
import { localStorage } from '@bereghici/storage';

import { LightTheme } from './light';
import { DarkTheme } from './dark';
import type { Theme } from './types.js';

const THEME_STORAGE_KEY = 'theme';

const DesignSystemThemeContext =
  React.createContext<React.Dispatch<React.SetStateAction<Theme>> | null>(null);

const getCurrentTheme = (themeName: string | null): Theme => {
  const themes = [LightTheme, DarkTheme];
  const [defaultTheme] = themes;

  if (!themeName) {
    return defaultTheme;
  }

  const currentTheme = themes.find(theme => theme.name === themeName);
  return currentTheme ?? defaultTheme;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(LightTheme);

  React.useEffect(() => {
    const savedTheme = localStorage.get<string>(THEME_STORAGE_KEY);
    if (savedTheme !== LightTheme.name) {
      setCurrentTheme(getCurrentTheme(savedTheme));
    }
  }, []);

  React.useEffect(() => {
    localStorage.set(THEME_STORAGE_KEY, currentTheme.name);
  }, [currentTheme]);

  return (
    <DesignSystemThemeContext.Provider value={setCurrentTheme}>
      <ThemeContext.Provider value={currentTheme}>
        {children}
      </ThemeContext.Provider>
    </DesignSystemThemeContext.Provider>
  );
};

export const useChangeTheme = (): React.Dispatch<
  React.SetStateAction<Theme>
> => {
  const changeTheme = React.useContext(DesignSystemThemeContext);

  if (!changeTheme) {
    throw new Error(
      'useChangeTheme hook should be wrapped in DesignSystemThemeContext'
    );
  }

  return changeTheme;
};

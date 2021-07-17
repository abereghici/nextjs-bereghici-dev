import * as React from 'react';
import { ThemeContext } from '@emotion/react';

import { LightTheme } from './light';
import type { Theme } from './types.js';

const DesignSystemThemeContext =
  React.createContext<React.Dispatch<React.SetStateAction<Theme>> | null>(null);

export const ThemeProvider = ({
  theme,
  children,
}: {
  theme?: Theme;
  children: React.ReactNode;
}) => {
  const [currentTheme, setCurrentTheme] = React.useState(theme ?? LightTheme);

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

import * as React from 'react';
import { useTheme } from '@emotion/react';
import {
  useChangeTheme,
  DarkTheme,
  LightTheme,
  Button,
} from '@bereghici/design-system.core';
import Sun from '@bereghici/icons/Sun';
import Moon from '@bereghici/icons/Moon';

export const ThemeToggle = () => {
  const theme = useTheme();
  const changeTheme = useChangeTheme();

  const onToggle = () => {
    changeTheme(t => (t === DarkTheme ? LightTheme : DarkTheme));
  };

  return (
    <Button
      aria-label={`Activate ${
        theme.name === 'dark-theme' ? 'dark' : 'light'
      } theme`}
      variant="secondary"
      shape="circle"
      onClick={onToggle}
    >
      {theme.name === 'dark-theme' ? <Sun /> : <Moon />}
    </Button>
  );
};

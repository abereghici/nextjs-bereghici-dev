import * as React from 'react';
import { useThemeName } from '@bereghici/design-system.theme';
import { Button } from '@bereghici/design-system.button';
import Sun from '@bereghici/icons/Sun';
import Moon from '@bereghici/icons/Moon';

export const ThemeToggle = () => {
  const [themeName, setThemeName] = useThemeName();

  const onToggle = () => {
    setThemeName(themeName === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      aria-label={`Activate ${themeName === 'dark' ? 'dark' : 'light'} theme`}
      variant="secondary"
      shape="circle"
      onClick={onToggle}
    >
      {themeName === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
};

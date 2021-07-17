import React from 'react';
import { useTheme, Global } from '@emotion/react';

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          background: theme.colors.backgroundPrimary,
          color: theme.colors.contentPrimary,
          padding: 0,
          margin: 0,
          ...theme.typography.font300,
        },
      }}
    />
  );
};

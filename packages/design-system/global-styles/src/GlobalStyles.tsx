import React from 'react';
import { Global } from '@emotion/react';
import { theme } from '@bereghici/design-system.theme';

export const GlobalStyles = () => {
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
          minHeight: '100vh',
          ...theme.typography.font300,
        },
      }}
    />
  );
};

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
          minHeight: '100vh',
          ...theme.typography.font300,
        },
        'html, body, div, span, a, h1, h2, h3, h4, h5, h6, p, blockquote, img, ol, ul, li, input, label, select, table, tbody, tfoot, thead, tr, th, td, footer, header, menu, nav, section, video':
          {
            margin: 0,
            padding: 0,
            listStyle: 'none',
            border: 0,
          },
      }}
    />
  );
};

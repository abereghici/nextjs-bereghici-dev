import * as React from 'react';
import styled from '@emotion/styled';
import { ResponsiveContainer } from '@bereghici/design-system.responsive-container';
import { theme } from '@bereghici/design-system.theme';

const Container = styled.div({
  padding: theme.sizing.scale800,
  marginTop: theme.sizing.scale800,
  marginBottom: theme.sizing.scale800,
  background: theme.colors.backgroundPrimary,
  border: `1px solid ${theme.colors.borderOpaque}`,
  borderRadius: theme.sizing.scale400,
  [`.remark-code-title`]: {
    ...theme.typography.MonoLabelXSmall,
  },
  [`.anchor`]: {
    visibility: 'hidden',
    position: 'absolute',
    marginLeft: `-0.6em`,
    paddingRight: `0.3em`,
    width: '80%',
    maxWidth: theme.layout.maxContentWidth,
    cursor: 'pointer',
  },
  [`.anchor:hover`]: {
    visibility: 'visible',
  },
  [`.anchor:after`]: {
    content: '"#"',
    color: theme.colors.contentStateDisabled,
  },
  [`*:hover > .anchor`]: {
    visibility: 'visible',
    textDecoration: 'none',
  },
});

export const BlogView = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResponsiveContainer as="section">
      <Container>{children}</Container>
    </ResponsiveContainer>
  );
};

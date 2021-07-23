import * as React from 'react';
import styled from '@emotion/styled';
import { ResponsiveContainer } from '@bereghici/design-system.core';

const Container = styled.div(({ theme }) => ({
  padding: theme.sizing.scale800,
  marginTop: theme.sizing.scale800,
  background: theme.colors.backgroundPrimary,
  border: `1px solid ${theme.colors.borderOpaque}`,
  borderRadius: theme.sizing.scale400,
}));

export const FullArticleContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ResponsiveContainer as="section">
      <Container>{children}</Container>
    </ResponsiveContainer>
  );
};

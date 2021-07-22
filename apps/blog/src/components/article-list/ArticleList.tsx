import styled from '@emotion/styled';
import { ResponsiveContainer } from '@bereghici/design-system.core';

const Container = styled(ResponsiveContainer)(({ theme }) => ({
  margin: theme.sizing.scale800,
  '& > li': {
    marginTop: theme.sizing.scale800,
    marginBottom: theme.sizing.scale800,
  },
}));

export const ArticleList = ({ children }: { children: React.ReactNode }) => {
  return <Container as="ul">{children}</Container>;
};

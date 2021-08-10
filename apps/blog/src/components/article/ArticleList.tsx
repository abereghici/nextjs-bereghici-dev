import styled from '@emotion/styled';
import { theme } from '@bereghici/design-system.theme';
import { ResponsiveContainer } from '@bereghici/design-system.responsive-container';
import { HeadingSmall } from '@bereghici/design-system.typography';

const Container = styled(ResponsiveContainer)({
  margin: theme.sizing.scale800,
  '& > li': {
    marginTop: theme.sizing.scale800,
    marginBottom: theme.sizing.scale800,
  },
  [theme.mediaQueries.mobile]: {
    margin: 0,
  },
});

export const ArticleList = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container as="ul">
      <HeadingSmall>Latest articles</HeadingSmall>
      {children}
    </Container>
  );
};

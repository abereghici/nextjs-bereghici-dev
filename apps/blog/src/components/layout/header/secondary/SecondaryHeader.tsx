import styled from '@emotion/styled';
import NextLink from 'next/link';
import { ResponsiveContainer } from '@bereghici/design-system.responsive-container';
import { Button } from '@bereghici/design-system.button';
import { theme } from '@bereghici/design-system.theme';

import { ThemeToggle } from '../theme-toggle';
import { Logo } from './Logo';

const StyledHeader = styled.header({
  background: theme.colors.headerSecondaryBackground,
  borderBottom: `1px solid ${theme.colors.borderOpaque}`,
});

const Container = styled(ResponsiveContainer)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.sizing.scale200,
  paddingBottom: theme.sizing.scale200,
});

export const SecondaryHeader = () => {
  return (
    <StyledHeader>
      <Container>
        <NextLink href="/" passHref>
          <Button variant="minimal" shape="pill" size="compact">
            <Logo />
          </Button>
        </NextLink>
        <ThemeToggle />
      </Container>
    </StyledHeader>
  );
};

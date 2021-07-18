import { ResponsiveContainer, Block } from '@bereghici/design-system.core';
import styled from '@emotion/styled';

import { Logo } from '../logo';
import { ThemeToggle } from '../theme-toggle';

const StyledHeader = styled.header(({ theme }) => ({
  paddingTop: theme.sizing.scale600,
  paddingBottom: theme.sizing.scale600,
  background: theme.colors.backgroundPrimary,
  borderBottom: `1px solid ${theme.colors.borderOpaque}`,
}));

export const Header = () => {
  return (
    <StyledHeader>
      <Block
        as={ResponsiveContainer}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        <ThemeToggle />
      </Block>
    </StyledHeader>
  );
};

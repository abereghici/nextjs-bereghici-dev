import {
  ResponsiveContainer,
  Block,
  Divider,
} from '@bereghici/design-system.core';
import styled from '@emotion/styled';

import { Logo } from '../logo';
import { ThemeToggle } from '../theme-toggle';

const StyledHeader = styled.header(({ theme }) => ({
  paddingTop: theme.sizing.scale600,
  marginBottom: theme.sizing.scale600,
  background: theme.colors.backgroundPrimary,
}));

export const Header = () => {
  return (
    <StyledHeader>
      <Block
        as={ResponsiveContainer}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom="scale700"
      >
        <Logo />
        <ThemeToggle />
      </Block>
      <Divider />
    </StyledHeader>
  );
};

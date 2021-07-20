import { ResponsiveContainer, Block } from '@bereghici/design-system.core';
import styled from '@emotion/styled';

import { Background } from './Background';
import { ThemeToggle } from '../theme-toggle';

const StyledHeader = styled.header(({ theme }) => ({
  background: theme.colors.headerBackground,
  marginBottom: `-${theme.sizing.scale200}`,
}));

export const Header = () => {
  return (
    <StyledHeader>
      <Block
        as={ResponsiveContainer}
        display="flex"
        justifyContent="flex-end"
        paddingTop="scale700"
      >
        <ThemeToggle />
      </Block>
      <ResponsiveContainer>
        <Background />
      </ResponsiveContainer>
    </StyledHeader>
  );
};

import styled from '@emotion/styled';
import { ResponsiveContainer } from '@bereghici/design-system.responsive-container';
import { Block } from '@bereghici/design-system.block';
import { theme } from '@bereghici/design-system.theme';

import { Background } from './Background';
import { ThemeToggle } from '../theme-toggle';

const StyledHeader = styled.header({
  background: theme.colors.headerPrimaryBackground,
  marginBottom: `-${theme.sizing.scale200}`,
});

export const PrimaryHeader = () => {
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

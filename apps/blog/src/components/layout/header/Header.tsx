import styled from '@emotion/styled';
import { ResponsiveContainer } from '@bereghici/design-system.responsive-container';
import { Block } from '@bereghici/design-system.block';
import { theme } from '@bereghici/design-system.theme';

import { Logo } from './Logo';
import { ThemeToggle } from './theme-toggle';

const StyledHeader = styled.header({
  paddingTop: theme.sizing.scale800,
  paddingBottom: theme.sizing.scale800,
  backdropFilter: `saturate(180%) blur(20px)`,
  position: 'sticky',
  top: 0,
  zIndex: 1,
  borderBottom: Object.values(theme.borders.border200).join(' '),
  backgroundColor: theme.colors.headerBackground,
});

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

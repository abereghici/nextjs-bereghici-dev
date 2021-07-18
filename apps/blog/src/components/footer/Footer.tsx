import styled from '@emotion/styled';
import { ResponsiveContainer, Block } from '@bereghici/design-system.core';

const StyledFooter = styled.footer(({ theme }) => ({
  background: theme.colors.backgroundTertiary,
  border: `1px solid ${theme.colors.borderOpaque}`,
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <ResponsiveContainer>
        <Block
          color="contentSecondary"
          font="ParagraphSmall"
          display="flex"
          justifyContent="center"
          padding="scale600"
        >
          © 2021-present Bereghici Alexandru. All Rights Reserved.
        </Block>
      </ResponsiveContainer>
    </StyledFooter>
  );
};

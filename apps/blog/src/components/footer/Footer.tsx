import styled from '@emotion/styled';
import GithubIcon from '@bereghici/icons/Github';
import TwitterIcon from '@bereghici/icons/Twitter';
import {
  ResponsiveContainer,
  Block,
  Button,
} from '@bereghici/design-system.core';

const StyledFooter = styled.footer(({ theme }) => ({
  background: theme.colors.backgroundTertiary,
  border: `1px solid ${theme.colors.borderOpaque}`,
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <ResponsiveContainer>
        <Block
          color="contentPrimary"
          font="ParagraphSmall"
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="scale600"
        >
          <Block>
            <Button
              as="a"
              href="https://github.com/abereghici"
              target="_blank"
              startEnhancer={<GithubIcon />}
              variant="secondary"
              shape="pill"
              size="compact"
            >
              Github
            </Button>
            <Button
              as="a"
              href="https://twitter.com/alexandru.brg"
              target="_blank"
              startEnhancer={<TwitterIcon />}
              variant="secondary"
              shape="pill"
              size="compact"
            >
              Twitter
            </Button>
          </Block>
          <Block>
            © 2021-present Bereghici Alexandru. All Rights Reserved.
          </Block>
        </Block>
      </ResponsiveContainer>
    </StyledFooter>
  );
};

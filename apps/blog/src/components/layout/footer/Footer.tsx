import styled from '@emotion/styled';
import GithubIcon from '@bereghici/icons/Github';
import TwitterIcon from '@bereghici/icons/Twitter';
import {
  ResponsiveContainer,
  Block,
  Button,
} from '@bereghici/design-system.core';

const StyledFooter = styled.footer(({ theme }) => ({
  background: theme.colors.backgroundPrimary,
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
              rel="noopener"
            >
              Github
            </Button>{' '}
            <Button
              as="a"
              href="https://twitter.com/alexandrubrg"
              target="_blank"
              startEnhancer={<TwitterIcon />}
              variant="secondary"
              shape="pill"
              size="compact"
              rel="noopener"
            >
              Twitter
            </Button>
          </Block>
          <Block marginTop="scale800">
            © 2021-present Bereghici Alexandru. All Rights Reserved.
          </Block>
        </Block>
      </ResponsiveContainer>
    </StyledFooter>
  );
};

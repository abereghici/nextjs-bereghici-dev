import styled from '@emotion/styled';
import GithubIcon from '@bereghici/icons/Github';
import LinkedinIcon from '@bereghici/icons/Linkedin';
import TwitterIcon from '@bereghici/icons/Twitter';
import { Button } from '@bereghici/design-system.button';
import { Block } from '@bereghici/design-system.block';
import { ResponsiveContainer } from '@bereghici/design-system.responsive-container';
import { theme } from '@bereghici/design-system.theme';

const StyledFooter = styled.footer({
  background: theme.colors.backgroundPrimary,
  ...theme.borders.border300,
});

const Container = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',

  [theme.mediaQueries.mobile]: {
    [`& > a`]: {
      marginLeft: 0,
      marginBottom: theme.sizing.scale600,
    },
  },

  [`& > a`]: {
    marginLeft: theme.sizing.scale600,
  },
});

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
          <Container>
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
            </Button>
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
            <Button
              as="a"
              href="https://www.linkedin.com/in/alexandrubereghici"
              target="_blank"
              startEnhancer={<LinkedinIcon />}
              variant="secondary"
              shape="pill"
              size="compact"
              rel="noopener"
            >
              Linkedin
            </Button>
          </Container>
          <Block marginTop="scale800">
            © 2021-present Bereghici Alexandru. All Rights Reserved.
          </Block>
        </Block>
      </ResponsiveContainer>
    </StyledFooter>
  );
};

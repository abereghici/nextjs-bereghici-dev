import styled from '@emotion/styled';
import NextLink from 'next/link';
import { Block } from '@bereghici/design-system.core';

const Link = styled.a(({ theme }) => ({
  textDecoration: 'none',
  ...theme.typography.DisplayXSmall,
}));

export const Logo = () => {
  return (
    <NextLink passHref href="/">
      <Link>
        <Block as="b" color="contentSecondary">
          bereghici
        </Block>
        <Block as="b" color="contentNegative">
          .dev
        </Block>
      </Link>
    </NextLink>
  );
};

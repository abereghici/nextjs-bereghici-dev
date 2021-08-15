import styled from '@emotion/styled';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
} from '@bereghici/design-system.typography';
import { Link as DSLink } from '@bereghici/design-system.link';
import { theme } from '@bereghici/design-system.theme';

export const Link = ({
  href = '/',
  children,
  target,
  className,
}: React.HTMLProps<HTMLAnchorElement>) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <DSLink className={className} target={target ?? '_self'}>
          {children}
        </DSLink>
      </NextLink>
    );
  }

  return (
    <DSLink
      className={className}
      href={href}
      target={target ?? '_blank'}
      rel="noopener noreferrer"
    >
      {children}
    </DSLink>
  );
};

export const Pre = styled.pre({
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  padding: theme.sizing.scale400,
  ...theme.borders.border100,
  borderRadius: theme.borders.radius200,
  backgroundColor: theme.colors.backgroundSecondary,
  ...theme.typography.MonoParagraphSmall,
  [`::-webkit-scrollbar`]: {
    display: 'none',
  },
});

export const InlineCode = styled.code({
  padding: theme.sizing.scale200,
  borderRadius: theme.sizing.scale100,
  ...theme.typography.MonoParagraphSmall,
});

export const Code = styled.code({
  whiteSpace: 'pre-wrap',
});

export default {
  h1: HeadingXXLarge,
  h2: HeadingXLarge,
  h3: HeadingLarge,
  h4: HeadingMedium,
  h5: HeadingSmall,
  h6: HeadingXSmall,
  Image,
  a: Link,
  pre: Pre,
  code: Code,
  inlineCode: InlineCode,
};

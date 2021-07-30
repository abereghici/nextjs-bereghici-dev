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
  border: `1px solid ${theme.colors.borderOpaque}`,
  backgroundColor: theme.colors.backgroundSecondary,
  ...theme.typography.MonoLabelXSmall,
  [`[class*='language-']`]: {
    color: theme.colors.syntaxText,
  },
  [`::-webkit-scrollbar`]: {
    display: 'none',
  },
});

export const InlineCode = styled.code({
  padding: theme.sizing.scale200,
  borderRadius: theme.sizing.scale100,
  backgroundColor: theme.colors.backgroundSecondary,
  ...theme.typography.MonoLabelXSmall,
});

export const Code = styled.code({
  color: theme.colors.contentPrimary,
  whiteSpace: 'pre-wrap',
  [`.token.comment,
    .token.punctuation
    .token.prolog,
    .token.doctype,
    .token.cdata`]: {
    color: theme.colors.syntaxComment,
  },
  [`.token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted`]: {
    color: theme.colors.syntaxVar,
  },
  [`.token.selector,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted`]: {
    color: theme.colors.syntaxStr,
  },
  [`.token.attr-name`]: {
    color: theme.colors.syntaxAtrName,
  },
  [`.token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.regex,
    .token.important,
    .token.variable
`]: {
    color: theme.colors.syntaxRegex,
  },
  [`.token.atrule,
    .token.attr-value,
    .token.keyword`]: {
    color: theme.colors.syntaxAtrValue,
  },
  [`.token.function,
    .token.class-name`]: {
    color: theme.colors.syntaxFunction,
  },
  [`[class*='language-']`]: {
    color: theme.colors.syntaxText,
  },
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

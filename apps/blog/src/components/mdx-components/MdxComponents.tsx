import styled from '@emotion/styled';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Link as DSLink,
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
} from '@bereghici/design-system.core';

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

export const Pre = styled.pre(({ theme }) => {
  return {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    padding: theme.sizing.scale400,
    border: `1px solid ${theme.colors.borderOpaque}`,
    backgroundColor: theme.colors.backgroundSecondary,
    ...theme.typography.MonoLabelXSmall,
    [`[class*='language-']`]: {
      color:
        theme.name === 'light-theme'
          ? theme.colors.gray800
          : theme.colors.gray50,
    },
    [`::-webkit-scrollbar`]: {
      display: 'none',
    },
  };
});

export const InlineCode = styled.code(({ theme }) => {
  return {
    padding: theme.sizing.scale200,
    borderRadius: theme.sizing.scale100,
    backgroundColor: theme.colors.backgroundSecondary,
    ...theme.typography.MonoLabelXSmall,
  };
});

export const Code = styled.code(({ theme }) => {
  return {
    color: theme.colors.contentPrimary,
    whiteSpace: 'pre-wrap',
    [`.token.comment,
    .token.punctuation
    .token.prolog,
    .token.doctype,
    .token.cdata`]: {
      color:
        theme.name === 'light-theme'
          ? theme.colors.gray700
          : theme.colors.gray300,
    },
    [`.token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted`]: {
      color:
        theme.name === 'light-theme'
          ? theme.colors.green500
          : theme.colors.green200,
    },
    [`.token.selector,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted`]: {
      color:
        theme.name === 'light-theme'
          ? theme.colors.purple400
          : theme.colors.purple200,
    },
    [`
    .token.attr-name`]: {
      color:
        theme.name === 'light-theme'
          ? theme.colors.orange600
          : theme.colors.orange200,
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
      color:
        theme.name === 'light-theme'
          ? theme.colors.yellow500
          : theme.colors.yellow200,
    },
    [`.token.atrule,
    .token.attr-value,
    .token.keyword`]: {
      color:
        theme.name === 'light-theme'
          ? theme.colors.blue500
          : theme.colors.blue200,
    },
    [`.token.function,
    .token.class-name`]: {
      color:
        theme.name === 'light-theme'
          ? theme.colors.red400
          : theme.colors.red200,
    },
    [`[class*='language-']`]: {
      color:
        theme.name === 'light-theme'
          ? theme.colors.gray800
          : theme.colors.gray50,
    },
  };
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

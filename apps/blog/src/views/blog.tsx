import * as React from 'react';
import styled from '@emotion/styled';
import { ResponsiveContainer } from '@bereghici/design-system.responsive-container';
import { theme } from '@bereghici/design-system.theme';
import { ArticleType } from 'shared/types';
import { Layout } from 'components/layout';
import {
  HeadingXXLarge,
  ParagraphSmall,
} from '@bereghici/design-system.typography';
import { Block } from '@bereghici/design-system.block';
import { Link } from '@bereghici/design-system.link';
import { ViewCounter } from 'components/view-counter';
import { config } from 'config';

const editUrl = (slug: string): string =>
  `https://github.com/abereghici/bereghici.dev/edit/main/apps/blog/src/data/blog/${slug}.mdx`;

const discussUrl = (slug: string): string =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://bereghici.dev/blog/${slug}`
  )}`;

const Container = styled.div({
  padding: theme.sizing.scale800,
  marginTop: theme.sizing.scale800,
  marginBottom: theme.sizing.scale800,
  background: theme.colors.backgroundPrimary,
  wordBreak: 'break-word',
  ...theme.borders.border300,
  borderRadius: theme.borders.radius300,
  [`.remark-code-title`]: {
    ...theme.typography.MonoLabelXSmall,
  },
  [`.anchor`]: {
    visibility: 'hidden',
    position: 'absolute',
    marginLeft: `-0.6em`,
    paddingRight: `0.3em`,
    width: '80%',
    maxWidth: theme.layout.maxContentWidth,
    cursor: 'pointer',
  },
  [`.anchor:hover`]: {
    visibility: 'visible',
  },
  [`.anchor:after`]: {
    content: '"#"',
    color: theme.colors.contentStateDisabled,
  },
  [`*:hover > .anchor`]: {
    visibility: 'visible',
    textDecoration: 'none',
  },
});

type Props = {
  article: ArticleType;
  children: React.ReactNode;
};

export const BlogView = ({ article, children }: Props) => {
  return (
    <Layout
      meta={{
        path: `/blog/${article.slug}`,
        title: article.title,
        description: article.description,
        image: article.image
          ? {
              src: `${config.appBaseUrl}${article.image}`,
              alt: article.title,
            }
          : undefined,
      }}
    >
      <ResponsiveContainer as="section">
        <Container>
          <HeadingXXLarge>{article.title}</HeadingXXLarge>
          <Block display="flex" justifyContent="space-between">
            <ParagraphSmall>
              {article.date} • {article.readingTime}
            </ParagraphSmall>
            <ParagraphSmall>
              <ViewCounter slug={article.slug} />
            </ParagraphSmall>
          </Block>
          {children}
          <Block display="flex" marginTop="scale1200" justifyContent="flex-end">
            <Link
              animateUnderline
              href={discussUrl(article.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss on Twitter
            </Link>
            <Block marginLeft="scale400" marginRight="scale400">{` • `}</Block>
            <Link
              animateUnderline
              href={editUrl(article.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit on Github
            </Link>
          </Block>
        </Container>
      </ResponsiveContainer>
    </Layout>
  );
};

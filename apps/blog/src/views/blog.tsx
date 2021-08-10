import * as React from 'react';
import styled from '@emotion/styled';
import { ResponsiveContainer } from '@bereghici/design-system.responsive-container';
import { theme } from '@bereghici/design-system.theme';
import { ArticleType } from 'shared/types';
import { SecondaryLayout } from 'components/layout';
import {
  HeadingXXLarge,
  ParagraphXSmall,
} from '@bereghici/design-system.typography';
import { Block } from '@bereghici/design-system.block';
import { ViewCounter } from 'components/view-counter';

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
    <SecondaryLayout
      meta={{
        path: `/blog/${article.slug}`,
        title: article.title,
        description: article.description,
      }}
    >
      <ResponsiveContainer as="section">
        <Container>
          <HeadingXXLarge>{article.title}</HeadingXXLarge>
          <Block display="flex" justifyContent="space-between">
            <ParagraphXSmall>
              {article.date} • {article.readingTime}
            </ParagraphXSmall>
            <ParagraphXSmall>
              <ViewCounter slug={article.slug} />
            </ParagraphXSmall>
          </Block>
          {children}
        </Container>
      </ResponsiveContainer>
    </SecondaryLayout>
  );
};

import * as React from 'react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { Link, Button } from '@bereghici/design-system.core';
import { ArticleType } from 'shared/types';

const Container = styled.article(({ theme }) => ({
  padding: theme.sizing.scale800,
  background: theme.colors.backgroundPrimary,
  border: `1px solid ${theme.colors.borderOpaque}`,
  borderRadius: theme.sizing.scale400,
}));

const ListItem = styled.li(() => ({
  listStyle: 'none',
}));

const Header = styled.header(({ theme }) => ({
  marginBottom: theme.sizing.scale600,
}));

const Title = styled(Link)(({ theme }) => ({
  ...theme.typography.HeadingSmall,
  marginBottom: theme.sizing.scale400,
  fontWeight: 700,
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'block',
}));

const PublishTime = styled.time(({ theme }) => ({
  ...theme.typography.MonoParagraphXSmall,
  color: theme.colors.contentSecondary,
  margin: 0,
}));

const EstimateReadingTime = styled.p(({ theme }) => ({
  ...theme.typography.MonoParagraphXSmall,
  color: theme.colors.contentSecondary,
  margin: 0,
}));

const Summary = styled.summary(({ theme }) => ({
  ...theme.typography.ParagraphSmall,
  marginBottom: theme.sizing.scale600,
}));

type Props = {
  article: ArticleType;
};

export const ArticleCard = ({ article }: Props) => {
  const link = `/blog/${article.slug}`;

  return (
    <ListItem>
      <Container>
        <Header>
          <NextLink href={link} passHref>
            <Title>{article.title}</Title>
          </NextLink>
          <PublishTime dateTime={article.date}>
            Published: {article.date}
          </PublishTime>
          <EstimateReadingTime>{article.readingTime}</EstimateReadingTime>
        </Header>

        <Summary>{article.description}</Summary>

        <NextLink href={link} passHref>
          <Button variant="primary" shape="pill" size="mini">
            Read More
          </Button>
        </NextLink>
      </Container>
    </ListItem>
  );
};

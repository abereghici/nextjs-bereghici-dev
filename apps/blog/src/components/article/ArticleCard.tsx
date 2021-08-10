import * as React from 'react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { theme } from '@bereghici/design-system.theme';
import { Link } from '@bereghici/design-system.link';
import { Button } from '@bereghici/design-system.button';
import { ArticleType } from 'shared/types';

const Container = styled.article({
  padding: theme.sizing.scale800,
  background: theme.colors.backgroundPrimary,
  ...theme.borders.border300,
  borderRadius: theme.borders.radius300,
});

const ListItem = styled.li(() => ({
  listStyle: 'none',
}));

const Header = styled.header({
  marginBottom: theme.sizing.scale600,
});

const Title = styled(Link)({
  ...theme.typography.HeadingSmall,
  marginBottom: theme.sizing.scale400,
  fontWeight: 700,
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'block',
});

const PublishTime = styled.time({
  ...theme.typography.MonoParagraphMedium,
  color: theme.colors.contentSecondary,
  margin: 0,
});

const EstimateReadingTime = styled.p({
  ...theme.typography.MonoParagraphMedium,
  color: theme.colors.contentSecondary,
  margin: 0,
});

const Summary = styled.summary({
  ...theme.typography.ParagraphMedium,
  marginBottom: theme.sizing.scale600,
});

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
          <Button variant="primary" shape="pill" size="compact">
            Read More
          </Button>
        </NextLink>
      </Container>
    </ListItem>
  );
};

import * as React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import styled from '@emotion/styled';
import { theme } from '@bereghici/design-system.theme';
import { Link } from '@bereghici/design-system.link';
import { Button } from '@bereghici/design-system.button';
import {
  HeadingSmall,
  ParagraphMedium,
} from '@bereghici/design-system.typography';
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

const ImageWrapper = styled.div({
  position: 'relative',
  width: '100%',
  height: '18.750rem',
  marginBottom: theme.sizing.scale600,
  background: theme.colors.backgroundAlwaysDark,
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
            <HeadingSmall margin="scale0">
              <Title>{article.title}</Title>
            </HeadingSmall>
          </NextLink>
          <PublishTime dateTime={article.date}>
            Published: {article.date}
          </PublishTime>
          <EstimateReadingTime>{article.readingTime}</EstimateReadingTime>
        </Header>

        <ImageWrapper>
          {article.image && (
            <NextImage
              alt="Article cover image"
              src={article.image}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={article.image}
            />
          )}
        </ImageWrapper>
        <ParagraphMedium marginBottom="scale600">
          {article.description}
        </ParagraphMedium>

        <NextLink href={link} passHref>
          <Button as="a" variant="primary" shape="pill" size="compact">
            Read More
          </Button>
        </NextLink>
      </Container>
    </ListItem>
  );
};

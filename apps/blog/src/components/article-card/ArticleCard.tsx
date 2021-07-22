import * as React from 'react';
import styled from '@emotion/styled';
import { Link, Button } from '@bereghici/design-system.core';

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
  paddingBottom: theme.sizing.scale400,
  fontWeight: 700,
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'block',
}));

const PublishTime = styled.time(({ theme }) => ({
  ...theme.typography.MonoParagraphXSmall,
  color: theme.colors.contentTertiary,
}));

const EstimateReadingTime = styled.p(({ theme }) => ({
  ...theme.typography.MonoParagraphXSmall,
  color: theme.colors.contentTertiary,
}));

const Summary = styled.summary(({ theme }) => ({
  ...theme.typography.ParagraphSmall,
  marginBottom: theme.sizing.scale600,
}));

export const ArticleCard = () => {
  return (
    <ListItem>
      <Container>
        <Header>
          <Title>Demystifying styled-components</Title>
          <PublishTime dateTime="2021-07-07">7 July 2021</PublishTime>
          <EstimateReadingTime color="contentTertiary">
            Approximate reading time: 1 minute(s)
          </EstimateReadingTime>
        </Header>

        <Summary>
          For so many React devs, styled-components seems kinda magical. It
          isn't at all clear how it uses traditional CSS features
          under-the-hood, and that lack of clarity can cause real problems when
          things go awry. In this post, we'll learn exactly how
          styled-components works by building our own mini-version.
        </Summary>

        <Button variant="primary" shape="pill" size="mini" href="/">
          Read More
        </Button>
      </Container>
    </ListItem>
  );
};

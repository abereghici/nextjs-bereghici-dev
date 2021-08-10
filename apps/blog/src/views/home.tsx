import styled from '@emotion/styled';
import {
  DisplayXSmall,
  ParagraphMedium,
} from '@bereghici/design-system.typography';
import { theme } from '@bereghici/design-system.theme';
import { Link } from '@bereghici/design-system.link';
import { ResponsiveContainer } from '@bereghici/design-system.responsive-container';
import { ArticleType } from 'shared/types';
import { PrimaryLayout } from 'components/layout';
import { ArticleList, ArticleCard } from 'components/article';

type Props = {
  articles: ArticleType[];
};

const Container = styled(ResponsiveContainer)({
  textAlign: 'center',
  margin: `${theme.sizing.scale1600} 0`,
});

export function HomeView({ articles }: Props) {
  return (
    <PrimaryLayout
      meta={{
        path: '/',
        title: 'Alexandru Bereghici',
        description: 'Software engineer specializing in JavaScript ecosystem ',
        image: {
          src: '/static/images/avatar.jpeg',
          alt: 'Alexandru Bereghici',
        },
      }}
    >
      <Container>
        <DisplayXSmall>Hey, {`I'm`} Alexandru</DisplayXSmall>
        <ParagraphMedium>
          I’m a software developer living in Chisinau, Moldova. My professional
          experience has centered around building user interfaces and
          client-side applications using both native and web technologies.
        </ParagraphMedium>
        <ParagraphMedium>
          Contact me via email at{' '}
          <Link animateUnderline href="mailto:alexandru.brg@gmail.com">
            alexandru.brg@gmail.com
          </Link>
        </ParagraphMedium>
      </Container>

      <ArticleList>
        {articles.map(article => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </ArticleList>
    </PrimaryLayout>
  );
}

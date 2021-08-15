import { ArticleType } from 'shared/types';
import { Layout } from 'components/layout';
import { ArticleList, ArticleCard } from 'components/article';

type Props = {
  articles: ArticleType[];
};

export function HomeView({ articles }: Props) {
  return (
    <Layout
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
      <ArticleList>
        {articles.map(article => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </ArticleList>
    </Layout>
  );
}

import { GetStaticProps } from 'next';
import { ArticleType } from 'shared/types';
import { getAllFilesFrontMatter } from 'shared/utils/mdx';

import { PrimaryLayout } from '../components/layout';
import { ArticleList, ArticleCard } from '../components/article';

type Props = {
  articles: ArticleType[];
};

export default function Home({ articles }: Props) {
  return (
    <PrimaryLayout
      meta={{
        path: '/',
        title: 'Alexandru Bereghici',
        description:
          'Friendly tutorials for developers. Focus on React, CSS, and more!',
      }}
    >
      <ArticleList>
        {articles.map(article => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </ArticleList>
    </PrimaryLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllFilesFrontMatter('blog');

  return { props: { articles } };
};

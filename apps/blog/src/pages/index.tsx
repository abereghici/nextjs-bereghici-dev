import { GetStaticProps } from 'next';
import { ArticleType } from 'shared/types';
import { getAllFilesFrontMatter } from 'shared/utils/mdx';
import { HomeView } from 'views';

type Props = {
  articles: ArticleType[];
};

export default function Home({ articles }: Props) {
  return <HomeView articles={articles} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = (
    (await getAllFilesFrontMatter('blog')) as ArticleType[]
  ).sort((article1: ArticleType, article2: ArticleType) => {
    return (
      new Date(article2.date).getTime() - new Date(article1.date).getTime()
    );
  });

  return { props: { articles } };
};

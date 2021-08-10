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
  const articles = await getAllFilesFrontMatter('blog');

  return { props: { articles } };
};

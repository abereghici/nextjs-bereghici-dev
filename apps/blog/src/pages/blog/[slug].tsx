import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ArticleType } from 'shared/types';
import { getFileBySlug, getFiles } from 'shared/utils/mdx';
import components from 'components/mdx-components';
import { BlogView } from 'views';

type Props = {
  source: MDXRemoteSerializeResult;
  meta: ArticleType;
};

export default function ArticlePage({ source, meta }: Props) {
  return (
    <BlogView article={meta}>
      <MDXRemote {...source} components={components} />
    </BlogView>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('blog');

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug('blog', params?.slug);

  return { props: { ...post } };
};

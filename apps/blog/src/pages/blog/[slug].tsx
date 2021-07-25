import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  HeadingXXLarge,
  ParagraphXSmall,
  Block,
} from '@bereghici/design-system.core';
import { ArticleType } from 'shared/types';
import { getFileBySlug, getFiles } from 'shared/utils/mdx';
import { SecondaryLayout } from 'components/layout';
import { FullArticleContainer } from 'components/article';
import components from 'components/mdx-components';

type Props = {
  source: MDXRemoteSerializeResult;
  meta: ArticleType;
};

export default function ArticlePage({ source, meta }: Props) {
  return (
    <SecondaryLayout
      meta={{
        path: `/blog/${meta.slug}`,
        title: meta.title,
        description: meta.description,
      }}
    >
      <FullArticleContainer>
        <HeadingXXLarge>
          <b>{meta.title}</b>
        </HeadingXXLarge>
        <Block display="flex">
          <ParagraphXSmall>
            {meta.date} • {meta.readingTime}
          </ParagraphXSmall>
        </Block>
        <MDXRemote {...source} components={components} />
      </FullArticleContainer>
    </SecondaryLayout>
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

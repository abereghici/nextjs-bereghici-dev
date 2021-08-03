import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  HeadingXXLarge,
  ParagraphXSmall,
} from '@bereghici/design-system.typography';
import { Block } from '@bereghici/design-system.block';
import { ArticleType } from 'shared/types';
import { getFileBySlug, getFiles } from 'shared/utils/mdx';
import { SecondaryLayout } from 'components/layout';
import components from 'components/mdx-components';
import { ViewCounter } from 'components/view-counter';
import { BlogView } from 'views';

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
      <BlogView>
        <HeadingXXLarge>
          <b>{meta.title}</b>
        </HeadingXXLarge>
        <Block display="flex" justifyContent="space-between">
          <ParagraphXSmall>
            {meta.date} • {meta.readingTime}
          </ParagraphXSmall>
          <ParagraphXSmall>
            <ViewCounter slug={meta.slug} />
          </ParagraphXSmall>
        </Block>
        <MDXRemote {...source} components={components} />
      </BlogView>
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

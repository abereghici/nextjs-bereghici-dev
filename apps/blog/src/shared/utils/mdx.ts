/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';
const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'src', 'data', type));
}

export async function getFileBySlug(type: string, slug?: string[] | string) {
  const source = slug
    ? fs.readFileSync(
        path.join(root, 'src', 'data', type, `${slug}.mdx`),
        'utf8'
      )
    : fs.readFileSync(path.join(root, 'src', 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor'],
            },
          },
        ],
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    source: mdxSource,
    meta: {
      ...data,
      readingTime: readingTime(content).text,
      slug: slug ?? null,
    },
  };
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'src', 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'src', 'data', type, postSlug),
      'utf8'
    );
    const { data, content } = matter(source);

    return [
      {
        ...data,
        readingTime: readingTime(content).text,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
}

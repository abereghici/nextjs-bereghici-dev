const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const baseUrl = process.env.NEXT_PUBLIC_SITE_BASEURL || '';

async function generate() {
  const feed = new RSS({
    title: 'Alexandru Bereghici',
    site_url: baseUrl,
    feed_url: `${baseUrl}/feed.xml`,
  });

  const posts = readdirSync(join(process.cwd(), 'src', 'data', 'blog'));
  posts.map(name => {
    const content = readFileSync(
      join(process.cwd(), 'src', 'data', 'blog', name)
    );
    const frontmatter = matter(content);

    feed.item({
      title: frontmatter.data.title,
      url: `${baseUrl}/blog/` + name.replace(/\.mdx?/, ''),
      date: frontmatter.data.publishedAt,
      description: frontmatter.data.summary,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();

import { Page } from '../components/page';
import { ArticleList } from '../components/article-list';
import { ArticleCard } from '../components/article-card';

export default function Home() {
  return (
    <Page
      path="/"
      title="Alexandru Bereghici"
      description="Friendly tutorials for developers. Focus on React, CSS, and more!"
    >
      <ArticleList>
        <ArticleCard />
      </ArticleList>
    </Page>
  );
}

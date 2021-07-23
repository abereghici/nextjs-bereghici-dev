import { PrimaryLayout } from '../components/layout';
import { ArticleList, ArticleCard } from '../components/article';

export default function Home() {
  return (
    <PrimaryLayout
      path="/"
      title="Alexandru Bereghici"
      description="Friendly tutorials for developers. Focus on React, CSS, and more!"
    >
      <ArticleList>
        <ArticleCard />
      </ArticleList>
    </PrimaryLayout>
  );
}

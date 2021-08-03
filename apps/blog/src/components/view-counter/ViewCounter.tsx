import * as React from 'react';
import useSWR from 'swr';
import fetcher from 'shared/utils/fetcher';

interface ViewApiResponse {
  total: string;
}

export function ViewCounter({ slug }: { slug: string }) {
  const { data } = useSWR<ViewApiResponse, Error>(
    `/api/views/${slug}`,
    fetcher
  );

  const views = Number(data?.total ?? 0);

  React.useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    void registerView();
  }, [slug]);

  return <>{views > 0 ? views.toLocaleString() : '–––'} views</>;
}

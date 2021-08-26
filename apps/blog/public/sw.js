if (!self.define) {
  const e = e => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        a[e] ||
          (s = new Promise(async s => {
            if ('document' in self) {
              const a = document.createElement('script');
              (a.src = e), document.head.appendChild(a), (a.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then(e => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(s) };
  self.define = (s, n, t) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {};
        const i = { uri: location.origin + s.slice(1) };
        return Promise.all(
          n.map(s => {
            switch (s) {
              case 'exports':
                return a;
              case 'module':
                return i;
              default:
                return e(s);
            }
          })
        ).then(e => {
          const s = t(...e);
          return a.default || (a.default = s), a;
        });
      }));
  };
}
define('./sw.js', ['./workbox-c6ab2624'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/9RsGL6UZDHbRssLc0S7U4/_buildManifest.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/9RsGL6UZDHbRssLc0S7U4/_ssgManifest.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/chunks/251-c278b36e2a70d985db0c.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/chunks/887-91188a2d18ea074c3845.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/chunks/main-bceb7b30355e8a962407.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/chunks/pages/_app-48182c16f37c65e97d98.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/chunks/pages/_error-73730f2c194b395c5aab.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/chunks/pages/blog/%5Bslug%5D-e89616bf3ed10def11b5.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/chunks/pages/index-6a0596dd22326aaf3a99.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/chunks/polyfills-dfc82d3956e13bf267a5.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/chunks/webpack-0cb069610457c13661fc.js',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        {
          url: '/_next/static/css/4c0682254ed8850c0584.css',
          revision: '9RsGL6UZDHbRssLc0S7U4',
        },
        { url: '/favicon.ico', revision: '09099b4c0649116dda2694fb3995dadb' },
        { url: '/feed.xml', revision: '73a5774914df968aa7cd63ea86b4df4e' },
        {
          url: '/icon-512x512.png',
          revision: '8f5e5b0aa5611547c063d024b157293f',
        },
        { url: '/icon.png', revision: '8b2a69ef86cf18ddfd5deefa1ed9df87' },
        { url: '/manifest.json', revision: 'd9a8c8efbbd6db9563aa40e1286cbf27' },
        { url: '/robots.txt', revision: 'fb8313f28c80aa04612a7dd5ce9381af' },
        { url: '/sitemap.xml', revision: '93a8193425bc24eeeccc5af96550222b' },
        {
          url: '/static/images/angular-tips-and-tricks-bundle-analyser.gif',
          revision: '27ae4b5521e0f91022b8d447d2999550',
        },
        {
          url: '/static/images/angular-tips-and-tricks.jpg',
          revision: '79796603e7e2ae73815d192e653c86a9',
        },
        {
          url: '/static/images/avatar.jpeg',
          revision: 'c4968a76e4306a594ac1f3baa27da83c',
        },
        {
          url: '/static/images/build-a-scalable-front-end-with-rush-monorepo-and-react-part1.jpg',
          revision: '722233b4a2444d1ee91da84679d497e4',
        },
        {
          url: '/static/images/build-a-scalable-front-end-with-rush-monorepo-and-react-part2.jpg',
          revision: '6345a83a95b777f6d7353f4691a0c572',
        },
        {
          url: '/static/images/build-a-scalable-front-end-with-rush-monorepo-and-react-part3.jpg',
          revision: '2f194593bbaa72d022f508dcfbd06681',
        },
        {
          url: '/static/images/build-a-scalable-front-end-with-rush-monorepo-and-react-part4.jpg',
          revision: 'fbdf47213124f711c96d630adc5df038',
        },
        {
          url: '/static/images/build-a-scalable-front-end-with-rush-monorepo-and-react-part5.jpg',
          revision: 'c5f7b02ff1f773a928ed18d7560c29ac',
        },
        {
          url: '/static/images/build-a-scalable-front-end-with-rush-monorepo-and-react.jpg',
          revision: '355caba9b5fb1de34a6222516cd296ed',
        },
        {
          url: '/static/images/react-versions-the-newest-features-of-react.jpg',
          revision: 'e05048dab1e17da8e5db236224807fed',
        },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});

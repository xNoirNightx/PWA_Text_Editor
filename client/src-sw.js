// Workbox libraries
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');

// Webpack manifest
precacheAndRoute(self.__WB_MANIFEST);

// cacheFirst strategy for page caching
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, 
    }),
  ],
});

// specific URLs
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

// navigation requests 
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO:Implement caching for other assets (e.g., JS, CSS, images, fonts)
registerRoute(
  /\.(?:js|css|jpg|jpeg|png|gif|svg|ico|woff2)$/,
  new StaleWhileRevalidate({
    cacheName: 'assets-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 7 * 24 * 60 * 60, 
      }),
    ],
  })
);

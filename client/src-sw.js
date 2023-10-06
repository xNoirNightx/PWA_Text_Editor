// Workbox libraries
import { precacheAndRoute } from "workbox-precaching";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";
import { registerRoute } from "workbox-routing";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";

// Webpack manifest
precacheAndRoute(self.__WB_MANIFEST);

// Cache for page caching (e.g., HTML pages)
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

// Cache specific URLs for offline use
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Cache other assets (e.g., JS, CSS, images, fonts)
registerRoute(
  /\.(?:js|css|jpg|jpeg|png|gif|svg|ico|woff2)$/,
  new StaleWhileRevalidate({
    cacheName: 'assets-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      }),
    ],
  })
);

// errors 
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return caches.match('/offline.html'); //offline fallback page
      });
    })
  );
});

const CACHE_NAME = 'B15-Stock-Take-cache-v2.5';
const urlsToCache = [
    '/B15-Stock-Take/',
    '/B15-Stock-Take/index.html',
    '/B15-Stock-Take/app.js',
    '/B15-Stock-Take/manifest.json',
    '/B15-Stock-Take/icons/B15icon-192x192.png',
    '/B15-Stock-Take/icons/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(networkResponse) {
          // Clone response before caching
          const responseToCache = networkResponse.clone();
          cache.put(event.request, responseToCache);
          return networkResponse;
        });
      });
    })
  );
});
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

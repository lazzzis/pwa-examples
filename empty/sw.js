self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/pwa-examples/empty/',
      '/pwa-examples/empty/index.html',
      '/pwa-examples/empty/index.js',
      '/pwa-examples/empty/style.css',
      '/pwa-examples/empty/images/fox1.jpg',
      '/pwa-examples/empty/images/fox2.jpg',
      '/pwa-examples/empty/images/fox3.jpg',
      '/pwa-examples/empty/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

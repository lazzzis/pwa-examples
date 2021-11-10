self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/pwa-examples/a2hs-maskable/',
      '/pwa-examples/a2hs-maskable/index.html',
      '/pwa-examples/a2hs-maskable/index.js',
      '/pwa-examples/a2hs-maskable/style.css',
      '/pwa-examples/a2hs-maskable/images/fox1.jpg',
      '/pwa-examples/a2hs-maskable/images/fox2.jpg',
      '/pwa-examples/a2hs-maskable/images/fox3.jpg',
      '/pwa-examples/a2hs-maskable/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

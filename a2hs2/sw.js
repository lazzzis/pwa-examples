self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/pwa-examples/a2hs2/',
      '/pwa-examples/a2hs2/index.html',
      '/pwa-examples/a2hs2/index.js',
      '/pwa-examples/a2hs2/style.css',
      '/pwa-examples/a2hs2/images/fox1.jpg',
      '/pwa-examples/a2hs2/images/fox2.jpg',
      '/pwa-examples/a2hs2/images/fox3.jpg',
      '/pwa-examples/a2hs2/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

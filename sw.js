const CACHE = 'cronograma-v1';
const FILES = [
  '/cronograma-pelambres/',
  '/cronograma-pelambres/index.html',
  '/cronograma-pelambres/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() =>
      caches.match('/cronograma-pelambres/index.html')
    ))
  );
});

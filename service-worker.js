var version = 'v1.14::'
self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches
      .open(version + 'base')
      .then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          'styles.css',
          'face-of-obum.webp',
          'face-of-obum.jpg',
          'icons/favicon.ico',
          'manifest.json',
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP|Source+Sans+Pro:400i,700&display=swap'
        ]);
      })
      .catch(function(error) {})
  );
});
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches
      .keys()
      .then(function(keys) {
        return Promise.all(
          keys
            .filter(function(key) {
              return !key.startsWith(version);
            })
            .map(function(key) {
              return caches.delete(key);
            })
        );
      })
      .catch(function (error) {})
  );
});
self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request)
      .then(response => {
        if (response.status === 404) {
          return;
        }
        return caches.open(version + 'base')
        .then(cache => {
          cache.put(event.request.url, response.clone());
          return response;
        });
      });
    }).catch(error => {
      return new Response('<h1>Service Unavailable</h1>', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/html'
            })
          });
    })
  );
});

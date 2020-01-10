var version = 'v1::';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
      .open(version + 'base')
      .then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/face-of-obum.webp',
          '/face-of-obum.jpg',
          '/icons/favicon.ico',
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP|Source+Sans+Pro:400i,700'
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
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches
      .match(event.request)
      .then(function(cached) {
        var networked = fetch(event.request)
          .then(fetchedFromNetwork, unableToResolve)
          .catch(unableToResolve);
        return cached || networked;
        function fetchedFromNetwork(response) {
          var cacheCopy = response.clone();
          caches
            .open(version + 'progressive')
            .then(function add(cache) {
              cache.put(event.request, cacheCopy);
            });
        }
        function unableToResolve() {
          return new Response('<h1>Service Unavailable</h1>', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/html'
            })
          });
        }
      })
      .catch(function(error) {})
  );
});

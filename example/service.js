// Cache a response
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache')
        .then((cache) => {
          return cache.addAll([
            '/',
            '../_ext/jquery.js',
            '../_ext/datatable.js',
            '../_ext/pdfmake/pdfmake.min.js',
            // Add other assets to cache here
          ]);
        })
    );
  });
  
  // Intercept fetch requests and serve from cache if available
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
    );
  });
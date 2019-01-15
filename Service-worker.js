

const cacheAssets = [
  'index.html',
  'main.js',
  'style.js'
];
// To Install serviceWorker
self.addEventListener('install', e => {
  console.log("Sevice Worker installed......!");

  e.waitUntil(
  caches.open('v1')
    .then(cache => {
      console.log('Service Worker: caching Files');
      cache.addAll(cacheAssets);
    })
    .then(() => self.skipWaiting())
    .catch(err => console.log(err))
  );
})
// To activate serviceWorker
self.addEventListener('activate', e => {
  console.log("Sevice Worker is Activated......!");

  //TO remove unwanted caches
e.waitUntil(
  caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cache => {
        if(cache !== 'v1'){
          console.log('Service Worker: Clearing Old Cache');
          return caches.delete(cache);
        }
      })
    )
  })
);
})
// call fetch Event
self.addEventListener('fetch', e => {
  console.log("Service Worker: Fetching...");
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  )
})

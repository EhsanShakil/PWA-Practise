let cacheName = "pwa";

let filesToCache = ["/", "/index.html", "/app.js"];

self.addEventListener("activate", () => {
  console.log("Service Worker Activated");
});

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("caching");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

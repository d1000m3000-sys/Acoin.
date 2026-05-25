self.addEventListener("install", (event) => {
  console.log("Acoin installed");
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});

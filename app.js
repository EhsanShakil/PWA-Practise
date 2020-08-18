if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(() => console.log("Service Worker Registered Successfully"))
    .catch(() => console.log("Something goes wrong"));
} else {
  console.log("service worker not available");
}

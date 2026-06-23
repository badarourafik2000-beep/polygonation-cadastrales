// Service worker minimal — sert uniquement à rendre le site installable
// comme application (Chrome/Edge exigent qu'un service worker soit
// enregistré pour proposer le bouton "Installer"). Il ne met rien en cache :
// l'application continue de nécessiter une connexion internet (PDF.js,
// Tesseract.js, Leaflet et les tuiles satellite sont chargés à chaque usage).
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

// Pass-through réseau : ne modifie aucune requête, ne mémorise rien.
self.addEventListener("fetch", () => {});

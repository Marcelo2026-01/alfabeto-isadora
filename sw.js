// Motor Service Worker AAA
self.addEventListener('install', (e) => {
    console.log('[Motor PWA] Instalado com sucesso.');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Motor PWA] Ativado!');
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // Permite que o jogo rode rápido e de forma estável
    e.respondWith(
        fetch(e.request).catch(() => {
            return new Response('Conectando ao servidor...');
        })
    );
});

// Motor Service Worker AAA
self.addEventListener('install', (e) => {
    console.log('[Motor PWA] Instalado com sucesso.');
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Permite que o jogo rode normal, mas libera a instalação
});

# Verificações desta entrega

Executadas em Chromium headless com automação Playwright. As telas de celular foram emuladas; não houve teste em aparelho Android ou iPhone físico.

- Conclusão das sete fases usando atualização do relógio do jogo acelerada no teste, coleta normal, saltos automáticos e cliques nas respostas. A versão entregue não contém a interface de instrumentação dos testes.
- 26 letras do alfabeto, 8 enigmas, 18 letras no voo, 10 sílabas, 10 letras iniciais no bosque, 5 frases e 10 contagens concluídos.
- Registro dos sete mundos concluídos e das melhores estrelas preservado após recarregar.
- Resposta incorreta: alternativa desabilitada, mensagem exibida, possibilidade de escolher a correta.
- Três colisões: tela de nova tentativa; retomada com três corações mantendo as descobertas.
- Botão de toque, pausa e continuação.
- Mudança entre formatos 390 × 844 e 844 × 390; ausência de rolagem horizontal.
- Conferência visual das capturas de computador, menu vertical, voo vertical e corrida horizontal.
- Preferência de música preservada após recarregar.
- Navegação nas quatro páginas da história.
- Carregamento e início do jogo offline após preparação do cache.
- Áudio offline: resposta parcial HTTP 206 para requisição de 100 bytes, com tamanho confirmado.
- Nenhuma exceção JavaScript nos testes adicionais de interface, orientação e offline.
- Sintaxe de game.js e sw.js verificada pelo Node.

A disponibilidade, qualidade e pronúncia da narração dependem das vozes do sistema. O teste não avalia resultados pedagógicos nem garante desempenho em todos os aparelhos.

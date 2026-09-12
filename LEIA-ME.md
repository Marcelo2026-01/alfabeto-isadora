# Isadora · Uma aventura de descobertas

## Abrir o jogo

1. Extraia todo o ZIP em uma pasta.
2. Abra `index.html` no navegador do computador. Mantenha a pasta `assets` junto aos demais arquivos.
3. Clique em **Começar aventura** ou escolha um mundo no mapa.

O jogo não exige instalação de bibliotecas, cadastro, servidor de dados ou conexão para baixar fontes. Os arquivos de imagem e áudio estão incluídos.

No celular, use a pasta em uma hospedagem estática HTTPS e abra o endereço no navegador. O layout aceita orientação vertical e horizontal. Para experimentar pela rede local, execute `python -m http.server 8000` dentro desta pasta e abra no celular o endereço do computador na mesma rede. Essa opção exige Python no computador e acesso permitido pela rede/firewall.

A instalação como aplicativo e o cache offline usam service worker: precisam de HTTPS ou localhost, não funcionam ao abrir diretamente por `file://`. Aguarde o primeiro carregamento completo antes de usar offline. A narração depende da voz em português disponível no navegador/dispositivo; os objetivos também são exibidos por escrito.

## Controles

- **Espaço / seta para cima / botão PULAR:** salto. Um segundo toque no ar dá um salto extra.
- **No voo:** segure Espaço, seta para cima ou VOAR para subir; solte para descer.
- **P / Esc / botão de pausa:** pausa durante a corrida.
- **R / Ouvir objetivo:** repete o objetivo.
- **Desafios:** clique ou toque na resposta. Não há cronômetro para responder.

Em Configurações: música, voz, efeitos, movimento decorativo e velocidade. A opção Tranquila é a inicial. A preferência do sistema por movimento reduzido também é respeitada.

## Os sete mundos

| Mundo | Atividade |
|---|---|
| Jardim das letras | Coleta ordenada das 26 letras, de A a Z |
| Vale dos enigmas | Oito desafios de letra inicial |
| Ilhas dos sonhos | Voo para reunir ISADORA, AMOR e VITÓRIA |
| Castelo das sílabas | Dez desafios de sílaba inicial |
| Bosque da memória | Dez desafios de letra inicial com leitura e narração |
| Ponte das palavras | Cinco frases para completar |
| Festival dos números | Dez desafios de contagem, de 1 a 10 |

Todos os mundos podem ser escolhidos no mapa. O botão principal retoma a última descoberta salva. Ao concluir um mundo, é possível seguir para o próximo. Obstáculos retiram corações; respostas incorretas permitem nova tentativa sem retirar corações. Ao perder os três corações, a fase oferece retomada a partir das descobertas salvas.

Cada mundo concede de uma a três estrelas: três sem erros/colisões, duas com até três, uma nos demais casos. A melhor avaliação fica guardada. O progresso é local ao navegador e dispositivo; limpar os dados do navegador apaga esse progresso. Não há sincronização entre aparelhos.

## Estrutura

- `index.html`: telas e estrutura acessível.
- `style.css`: interface adaptável.
- `game.js`: desenho em Canvas, fases, colisões, áudio, desafios, história e gravação local.
- `manifest.json` e `sw.js`: instalação e cache quando servido em contexto compatível.
- `assets/isadora.png`: sprites originais da personagem, sem alteração dos pixels. Retângulos de origem no código alinham suas poses.
- `assets/mundos.png`: nova arte panorâmica com três ambientes. Sete fases combinam esses ambientes com caminhos, paletas, obstáculos, pontes, portais e bandeirolas desenhados pelo jogo.
- Demais arquivos de `assets`: ícone e áudios recebidos com o projeto.

## Decisões da reformulação

O projeto enviado tinha HTML, CSS e JavaScript em um arquivo extenso, uma camada adicional de recursos sobre a lógica original, dois manifestos equivalentes que apontavam para `jogo.html` e um livro que referenciava `casa_sorrir.png`, ausente nos anexos.

Esta versão reorganiza o jogo em arquivos separados, corrige os caminhos, integra a história e substitui as telas e a renderização dos ambientes. Mantém Isadora e a proposta de alfabetização. Os modos de treino infinito do arquivo anterior passam a ser fases finitas que podem ser repetidas pelo mapa. A contagem foi ampliada de três para dez números.

A corrida para durante os desafios para separar o tempo de leitura da exigência de coordenação motora. A coleta de letras tem uma área generosa de alcance; letras perdidas voltam. A perda de corações permite retomar as descobertas. As três poses disponíveis foram reaproveitadas: não são uma nova animação quadro a quadro.

## Arte gerada

Nova arte criada com a ferramenta integrada de geração de imagens. A personagem não foi regenerada. Prompt utilizado:

> Use case: stylized-concept. Create a production game background atlas, one image containing exactly THREE equal horizontal wide panoramic strips stacked vertically, no borders, no text, no characters. Each strip side-scrolling platformer background, premium hand painted 3D storybook aesthetic soft rich detailed surfaces and atmospheric depth, child friendly magical world. TOP THIRD: emerald rolling meadow, flowering trees on edges, turquoise winding river, distant peach-roof windmill village, warm cream sky. MIDDLE THIRD: lavender floating islands with tiny ivory castles and peach roofs, waterfalls fading into pink clouds, luminous azure sky. BOTTOM THIRD: enchanted midnight teal forest, immense trees at sides, luminous turquoise mushrooms, blue stream, distant warm lantern treehouse, starry navy sky. All strips have distant environment only, open readable middle area for gameplay, NO foreground platforms, NO UI, NO letters. Cohesive sophisticated console adventure art direction. Landscape strip aspect 3:1 each, total image square 1536x1536 if possible. Render beautiful layered composition.

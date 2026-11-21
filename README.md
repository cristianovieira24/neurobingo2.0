# NeuroBingo

Um bingo de momentos improváveis com temas visuais, áudio original, salvamento local, exportação de cartela e três minijogos.

## Como abrir

1. Extraia a pasta `neurobingo`.
2. Abra `index.html` no Chrome, Edge, Firefox ou outro navegador moderno.
3. Clique em qualquer casa para marcar. Use **Editar** para trocar uma frase.

O projeto não precisa de instalação, servidor, conta, biblioteca externa, fonte remota ou conexão com a internet. Os sons são sintetizados em tempo real com a Web Audio API.

## O que tem

- Cartelas de 3×3 até 8×8.
- Detecção de linhas, colunas, diagonais e conclusão total.
- Oito temas: Neon Noir, Nórdico, Horror, Cyberpunk, 8-Bit, Sakura, Abismo e Arcade 80s.
- Três pacotes de frases, além de lista personalizada.
- Opção de casa livre no centro em cartelas ímpares.
- Sons originais sintetizados em tempo real, com variações por tema para marcação, desmarcação, linha, bingo e minijogos.
- Salvamento automático no armazenamento local do navegador.
- Exportação e importação de estado em JSON.
- Exportação de cartela em PNG, sem biblioteca externa.
- Três minijogos: Reflexo duvidoso, Memória de peixe e Spam sem propósito.
- Layout adaptado para desktop e celular.

## Salvamento e privacidade

O estado da cartela fica no `localStorage` do navegador e não é enviado para nenhum servidor. O botão **Exportar dados** gera um arquivo JSON que pode ser importado em outro navegador/dispositivo. Para transferir o progresso, exporte o JSON e depois importe o mesmo arquivo no outro dispositivo.

## Estrutura

```text
neurobingo/
├── index.html
├── README.md
├── assets/
│   └── neurobingo.svg
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── audio.js
    └── minigames.js
```

## Personalização

- **Temas:** edite as variáveis CSS no início de `css/styles.css`.
- **Pacotes de frases:** edite `PACKS` no início de `js/app.js`.
- **Sons:** edite os padrões em `js/audio.js`.
- **Minijogos:** cada jogo está isolado em `js/minigames.js`.

Compatível com navegadores modernos que suportem `localStorage`, `Canvas` e `Web Audio API`.

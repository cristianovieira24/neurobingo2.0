# NeuroBingo

Um bingo de momentos improváveis com identidade visual própria, áudio original, salvamento local, exportação de cartela e três minijogos.

## Abrir o jogo

O arquivo da raiz (\`index.html\`) carrega o jogo e recompõe seus recursos no navegador.

- **GitHub Pages:** no repositório, abra **Settings → Pages**, selecione **Deploy from a branch**, escolha a branch \`main\` e a pasta \`/(root)\`, depois salve. Quando o GitHub terminar a publicação, o endereço do Pages aparecerá nessa tela.
- **Localmente:** execute \`python -m http.server 8000\` na pasta do repositório e acesse \`http://localhost:8000\`.
- Use um navegador moderno com suporte a \`DecompressionStream\`, \`localStorage\`, Canvas e Web Audio API.

Não abra a página por \`file://\`: o carregador precisa buscar os arquivos do pacote por HTTP.

## O que tem

- Cartelas de 3×3 até 8×8.
- Detecção de linhas, colunas, diagonais e conclusão total.
- Oito temas: Neon Noir, Nórdico, Horror, Cyberpunk, 8-Bit, Sakura, Abismo e Arcade 80s.
- Três pacotes de frases, além de lista personalizada.
- Opção de casa livre no centro em cartelas ímpares.
- Sons sintetizados em tempo real, com variações por tema para marcação, desmarcação, linha, bingo e minijogos.
- Salvamento automático no armazenamento local do navegador.
- Exportação e importação de estado em JSON.
- Exportação de cartela em PNG.
- Três minijogos: Reflexo duvidoso, Memória de peixe e Spam sem propósito.
- Layout adaptado para desktop e celular.

## Salvamento e privacidade

O estado da cartela fica no \`localStorage\` do navegador e não é enviado para nenhum servidor. Use **Exportar dados** para criar um JSON de backup ou transferir o progresso para outro dispositivo.

## Restaurar os arquivos-fonte

Para obter os arquivos HTML, CSS, JavaScript e SVG separados numa pasta \`source/\`, instale o Node.js e execute na raiz do repositório:

\`\`\`bash
node tools/unpack.mjs
\`\`\`

Também é possível indicar outra pasta de destino:

\`\`\`bash
node tools/unpack.mjs ./meus-fontes
\`\`\`

A estrutura restaurada contém:

\`\`\`text
source/
├── index.html
├── assets/
│   └── neurobingo.svg
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── audio.js
    └── minigames.js
\`\`\`

Os dados originais são armazenados em partes compactadas em \`assets/bundle/\`; o carregador da raiz monta o jogo para publicação no GitHub Pages.

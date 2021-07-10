# Teste Aptidão para de vaga WebDesigner 2021 Linx

Esse é o app criado com base no layout enviado pela Linx sobre o teste para vaga de WebDesigner da Linx

## Como rodar o projeto?

* Faça o download ou git clone do repositório do arquivo.
* Para iniciar o projeto abra o terminal na pasta raiz e digite "npm install" ou "yarn install" para instalar dependências e depois "yarn start"

## Alterações
  * Observei que o layout não possuia alguns padrões de margens e paddings, então padronizei durante o desenvolvimento.
  * Observei também que o layout para Desktop possuia um campo de cadastro de newsletter e no Mobile não. Optei por deixar esse campo no Mobile, deixando também de uma maneira responsiva.
  * Adicionei uma validação em JavaScript no campo de envio da NewsLetter. Com retorno visual e textual para o usuário

## Escolhas
  * Priorizei em Desenvolver o Layout começando pelo Mobile, já que o processamento de estilização pelo computador em sua grande maioria é mais rapido.
  * Utilizei display grid e display flex em grande parte do desenvolvimento.
  * Utilizei variáveis SCSS para definir alguns pardrões ( cor, media queries, tamanho do container, tipo de font... ).
  * Também decidi separar os arquivos SCSS, para ter uma fácil manutenção.
  * Decidi criar um arquivo apenas para configurações globais de estilização (_theme.scss). Como padding de botões, animação de botões, cor de svgs e entre outros.

## Dificuldades
  * Tive dificuldade com a propriedade de Display Grid ( Alinhar o botão de "Ver Mais +" com base no display), mas vendo a documentação o problema foi resolvido.
  * Tive dificuldade em não quebrar o layout com o hover nos blocos de tasks. O problema era que pelo fato de estar sendo utilizado o display grid, quando o botão de "Alterar Prazo" aparecia, ele descia todos os blocos e não apenas o bloco que estava sendo acionado. Para resolver isso, optei em utilizar position absolute no botão de "Alterar Prazo" e fazer um calc(100% + 35px) na altura no bloco, assim consegui aplicar a estilização de transition e não quebrar o layout.
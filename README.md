## Ao criar um novo projeto:
- Baixar as depenências: 
```console
$ npm i
```

- Path do PUG principal: "app/views/componentes/main.pug".

- Path do SASS principal: "app/assets/sass/componentes/_core.scss".

- Path do JS principal: "app/assets/js/main.js".

- Substituir todas as ocorrências de "base-2018" pelo nome do novo projeto.

- Em "app/views/includes/header.pug", alterar o atributo "content" das meta tags "og:image:alt" e "og:description" com o título e a descrição desejadas (respectivamente) para o share das redes sociais do projeto.

- Alterar a imagem "app/assets/img/fb.jpg" para a nova imagem desejada (de iguais dimensões e nome) que aparecerá no share das redes sociais do projeto.


## Uso:
- Para rodar o projeto:
```console
$ npm start
```

- Para fazer o build projeto:
```console
$ npm run build
```
O resultado do build estará em "public/build".

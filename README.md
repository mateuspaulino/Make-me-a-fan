## Novo projeto:
### 1. Após clonar esta base:
- Baixar as dependências: 
```console
$ npm i
```

- Path do PUG principal: "app/views/componentes/main.pug".

- Path do SASS principal: "app/assets/sass/componentes/_core.scss".

- Path do JS principal: "app/assets/js/main.js".

- Apagar a pasta oculta ".git" na raíz do projeto.

- Substituir o nome da pasta do projeto e todas as ocorrências de "base-2018" em todos os arquivos, pelo nome do novo projeto (o nome do novo projeto precisa ser no formato "hypheneted lowercase", usando somente letras minúsculas e hífens, por exemplo "projeto-x").

- Em "app/views/includes/header.pug", alterar o atributo "content" das meta tags "og:image:alt" e "og:description" com o título e a descrição desejadas (respectivamente) para o share das redes sociais do projeto.

- Alterar a imagem "app/assets/img/fb.jpg" para a nova imagem desejada (de iguais dimensões e nome) que aparecerá no share das redes sociais do projeto.

### 2. Criando um projeto novo no Bitbucket:
Criar um novo "repository" com o nome do projeto novo em "Repository name" (o mesmo nome que foi usado para substituir as ocorrências de "base-2018") e selecionar o "Project" que tenha mais a ver com a categoria do projeto novo (criar um "Project" novo se não houver nenhuma que se encaixe).

Após a seleção destas opções, a tela seguinte mostrará na área do "Step 2: Connect your existing repository to Bitbucket", uma linha para adicionar a origin do projeto e outra para o primeiro push.
<br>
No terminal, no path projeto, rodar a primeira linha (a com o "git remote add origin" seguido da url).
<br>
Para o primeiro push do projeto, fazer o commit normalmente e após, o push conforme a segunda linha ("git push -u origin master"). Lembrando que os próximos push, poderão ser feitos normalmente com "git push".

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

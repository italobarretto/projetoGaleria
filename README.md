# projetoGaleria

Galeria de Fotos contruída com Bootstrap, jQuery e Webpack

Preview disponível [Aqui](https://italobarretto.github.io/projetoGaleriaBuild/) (página hospedada no GitHub)

## Como utilizar

**1.** instale o nodeJS,

**2.** execute `npm i` no local do package.json (instala as dependencias de desenvolvimento),

**3.** execute `npm start` para criar um servidor de teste

**4.** digite [http://localhost:9000](http://localhost:9000) no seu navegador e *voilà*

## Funcionalidades

- Filtrar fotos por país de origem;
- Arrastar fotos para reordená-las;
- Criar albuns personalizados e salvar fotos específicas neles.

## Desenvolvimento

Aplicação desenvolvida com Bootstrap, jQuery e um pouco de vanilla JavaScript.

As páginas são carregadas na página principal `index.html` através de requisição assíncrona utilizando o método `jQuery.ajax()`.

No contexto desse projeto, a *build* e o servidor de desenvolvimento são executados através do *webpack*, [aqui você encontra o arquivo de configuração do *webpack*](./webpack.config.js). Na execução da build o *webpack* executa rotinas de melhoria de performance através dos *plugins* `MiniCssExtractPlugin`, `OptimizeCSSAssetsPlugin` e `UglifyJsPlugin`.

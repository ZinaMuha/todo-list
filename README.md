#TODO-list на HTML, CSS, JS

Структура проекта:
/build
/gulp
/src
  /components
    /{name}
      /{name}.js
      /{name}.html
      /{name}.scss
  /fonts
  /images
  /styles
    /vendor
      normalize.scss
    /base
      fonts.scss
      vars.scss
    main.scss // импорты всех блоков и папок
  /scripts
    /vendor
    main.js //импорты всех блоков и папок
  /views
    index.html // include блоков через @@include("../blocks/modules/header/header.html")
webpack.config

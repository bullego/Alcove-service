//__________import bootstrap components
//выбираем только те компоненты, которые испоьзуются в проекте, чтоб не подключать весь файл bootstrap.js
//"gulp-rigger" в gulpfile.js с помощью конструкции "//= путь" склеит все части в один файл custom-bootstrap.js

//= ../../node_modules/bootstrap/js/dist/util.js
//= ../../node_modules/bootstrap/js/dist/button.js
//= ../../node_modules/bootstrap/js/dist/collapse.js
//= ../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../node_modules/bootstrap/js/dist/modal.js
//= ../../node_modules/bootstrap/js/dist/tab.js
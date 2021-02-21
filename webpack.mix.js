// crea variabile mix
let mix = require('laravel-mix');

// compila i file seguenti
mix.sass('resource/scss/app.scss', 'resource/dist/css');

// compila js
mix.js('resource/js/app.js', 'resource/dist/js');

// sincronizza la pagina automaticamente ad ogni cambio
mix.browserSync('myapp.test')
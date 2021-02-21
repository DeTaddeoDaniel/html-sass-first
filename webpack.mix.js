// crea variabile mix
let mix = require('laravel-mix');

// compila i file seguenti
mix.sass('resource/scss/app.scss', 'dist/css');

// compila js
// mix.js('resource/js/app.js', 'resource/dist/js');

mix.js('resource/js/app.js', 'dist/js').vue();

// sincronizza la pagina automaticamente ad ogni cambio
mix.browserSync('myapp.test')
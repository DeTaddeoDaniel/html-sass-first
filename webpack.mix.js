// crea variabile mix
let mix = require('laravel-mix');

// compila i file seguenti
mix.sass('resource/scss/app.scss', 'resource/dist/css');

// sincronizza la pagina automaticamente ad ogni cambio
mix.browserSync('myapp.test')
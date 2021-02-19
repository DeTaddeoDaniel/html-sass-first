// crea variabile mix
let mix = require('laravel-mix');

// compila i file seguenti
mix.sass('scss/app.scss', 'css');

// sincronizza la pagina automaticamente ad ogni cambio
mix.browserSync('myapp.test')
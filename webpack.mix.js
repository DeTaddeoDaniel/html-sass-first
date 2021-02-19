
let mix = require('laravel-mix');

mix.sass('scss/app.scss', 'css');

mix.browserSync('myapp.test')
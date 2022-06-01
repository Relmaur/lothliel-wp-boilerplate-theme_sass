let mix = require('laravel-mix');
require('laravel-mix-purgecss');

// JavaScript
mix.js('src/js/index.js', 'dist/js');

// Sass 
mix.sass('src/sass/main_desktop.scss', 'dist/css')
    .purgeCss();


// Live reload
// mix.browserSync('http://theme-testing.local/');
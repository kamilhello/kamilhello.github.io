const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.js('resources/js/app.js' ,'public/js/es6.js').vue();
 mix.babel(['public/js/es6.js'], 'public/js/app.js');
 mix.sass('resources/scss/app.scss', 'public/css');
 mix.copy('resources/images','public/images/');
 mix.copy('resources/videos','public/videos/');

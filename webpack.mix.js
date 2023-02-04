let mix = require('laravel-mix');

mix.js('resources/js/index.js', 'public/js').setPublicPath('public/js').react();
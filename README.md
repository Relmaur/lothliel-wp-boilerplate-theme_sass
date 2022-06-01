# Lothliel WP Theme Boilerplate

On the project assets/ folder type in the terminal:
```bash
npm install
```

Then, once all the dependencies are installed, run:
```bash
npx mix watch
```

This is going to tell Laravel Mix to watch for changes on the sass and js files, and it´ll bundle (and rebundle) them into the dist folder...

As it is right now it's only wathching for `index.js` and `main_desktop.scss`, when needed, add extra files you want Mix to watch by adding, for instance:
```javascript
// For Js
mix.js('src/js/another_js_file.js', 'dist/js');

// For Sass
mix.sass('src/sass/main_tablet.scss', 'dist/css').purgeCss();
mix.sass('src/sass/main_mobile.scss', 'dist/css').purgeCss();
// ... So on and so forth, to create (and purge) the corresponding main_tablet.css, main_mobile.css, etc...
```

For more info on Laravel Mix, refer to its [docs](https://laravel-mix.com/) page

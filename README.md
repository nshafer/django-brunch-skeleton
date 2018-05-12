# Git Brunch Skeleton

This sets up a Brunch config with defaults set to work well with
[django-brunch](https://github.com/nshafer/django-brunch).

## Included plugins

- clean-css-brunch - Minifies CSS when run in production mode.
- uglify-js-brunch - Minifies JS when run in production mode.
- auto-reload-brunch - Adds JS to automatically reload pages / inject changes when templates or static files change.

## Paths

Brunch is configured to watch for files and changes in

- app/
- test/
- vendor/
- templates/

Output is written to:

- public/

## Files

#### Javascripts / Templates

These are compiled to `app.js`

#### Stylesheets

These are compiled to `app.css`

## NPM Scripts

These scripts are available to run via npm.

- `npm start` - Starts brunch in watch mode with server on default port.
- `npm run build` - Run `brunch build`
- `npm run debug` - Run `brunch build --debug`
- `npm run compile` - Run `brunch build -p` to output production-ready files.

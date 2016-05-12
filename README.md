# broccoli-pug-render [![Build Status](https://travis-ci.org/qm3ster/broccoli-pug-render.svg?branch=master)](https://travis-ci.org/qm3ster/broccoli-pug-render) [![npm version](https://badge.fury.io/js/broccoli-pug-render.svg)](https://www.npmjs.com/package/broccoli-pug-render) [![npm downloads](https://img.shields.io/npm/dm/broccoli-pug-render.svg)](https://www.npmjs.com/package/broccoli-pug-render)

A [broccoli.js](https://github.com/joliss/broccoli) plugin to render [Pug](https://github.com/pugjs/pug) templates.

## Install

```
$ npm install --save-dev broccoli-pug-render
```

## Usage

```js
var renderPug = require('broccoli-pug-render');
var pages = new renderPug('src', {
    basedir: __dirname + '/partials',
    localvar: 'value'
});
```

## API

### renderPug(tree, [options])

#### options

See the Pug [options](http://pug-lang.com/api/).

## License

MIT © [qm3ster](https://github.com/qm3ster)

## Credit

Big thanks to [Devin Bayer](https://doubly.so) for creating [`broccoli-jade-render`](https://github.com/akvadrako/broccoli-jade-render)

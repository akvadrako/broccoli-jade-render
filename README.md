# broccoli-jade-render [![Build Status](https://travis-ci.org/akvadrako/broccoli-jade-render.svg?branch=master)](https://travis-ci.org/akvadrako/broccoli-jade-render)

A [broccoli.js](https://github.com/joliss/broccoli) plugin to render [Jade](https://github.com/visionmedia/jade) templates.

## Install

```
$ npm install --save-dev broccoli-jade-render
```

## Usage

```js
var renderJade = require('broccoli-jade-render');
var pages = new renderJade('src', {
    basedir: __dirname + '/partials',
    localvar: 'value'
});
```

## API

### renderJade(tree, [options])

#### options

See the Jade [options](http://jade-lang.com/api/).

## License

MIT © [Devin Bayer](https://doubly.so)
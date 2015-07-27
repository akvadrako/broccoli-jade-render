var fs = require('fs')
var path = require('path')
var fixturify = require('fixturify')
var quickTemp = require('quick-temp')
var assert = require('chai').assert
var Builder = require('broccoli').Builder

var renderJade = require('./index')

describe('unit tests', function() {
  it('test1', function(done) {
    fixturify.writeSync(this.tempdir, {
      'page.jade': 'page.jade contents',
    });

    var builder = new Builder(new renderJade(this.tempdir));

    builder.build()
      .then(function (hash) {
        var output = fixturify.readSync(hash.directory);
        assert.deepEqual(output, {
          'page.html': '<page class="jade">contents</page>'
        });
      })
      .finally(function () {
        builder.cleanup();
      })
      .then(done, done)
  })

  beforeEach(function() {
    quickTemp.makeOrRemake(this, 'tempdir');
  });

  after(function() {
    quickTemp.remove(this, 'tempdir');
  })
})

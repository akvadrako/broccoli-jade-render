var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var Plugin = require('broccoli-plugin')
var walkSync = require('walk-sync')
var pug = require('pug');
var extend = require('extend');

function Filter(inputNode, options) {
  this.options = extend({}, options);
  Plugin.call(this, [inputNode], this.options);
}

Filter.prototype = Object.create(Plugin.prototype)

Filter.prototype.build = function (readTree, destDir) {
  var self = this
  var srcDir = this.inputPaths[0]
  var paths = walkSync(srcDir)

  for (var i = 0; i < paths.length; ++i) {
    var filename = paths[i];

    if (filename.slice(-4) != '.pug' || filename.charAt(0) == '_') {
      continue;
    }

    var output = pug.renderFile(srcDir + '/' + filename,
      extend({
        basedir: srcDir
      }, this.options));

    outputFilename = this.outputPath + '/' + filename.replace('.pug', '.html');

    mkdirp(path.dirname(outputFilename));
    fs.writeFileSync(outputFilename, output);
  }
}

module.exports = Filter
module.exports.pug = pug

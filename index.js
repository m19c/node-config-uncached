'use strict';

var config = require('config'),
    path   = require('path');

function directory() {
  if (process.env.NODE_CONFIG_DIR) {
    return process.env.NODE_CONFIG_DIR;
  }

  return path.join(process.cwd(), 'config');
}

function purge() {
  var fileName;

  for (fileName in require.cache) {
    if (-1 === fileName.indexOf(directory())) {
      continue;
    }

    delete require.cache[fileName];
  }

  delete require.cache[require.resolve('config')];
}

module.exports = function (purgeConfig) {
  if (true === purgeConfig) {
    purge();
  }

  return require('config');
};
require('../../modules/es.array.iterator');
require('../../modules/es.object.to-string');
require('../../modules/es.promise');
require('../../modules/es.string.iterator');
require('../../modules/esnext.iterator.constructor');
// TODO: Remove from `core-js@4`
require('../../modules/esnext.iterator.as-indexed-pairs');
require('../../modules/esnext.iterator.drop');
require('../../modules/esnext.iterator.every');
require('../../modules/esnext.iterator.filter');
require('../../modules/esnext.iterator.find');
require('../../modules/esnext.iterator.flat-map');
require('../../modules/esnext.iterator.for-each');
require('../../modules/esnext.iterator.from');
require('../../modules/esnext.iterator.indexed');
require('../../modules/esnext.iterator.map');
require('../../modules/esnext.iterator.reduce');
require('../../modules/esnext.iterator.some');
require('../../modules/esnext.iterator.take');
require('../../modules/esnext.iterator.to-array');
require('../../modules/esnext.iterator.to-async');
require('../../modules/web.dom-collections.iterator');

var path = require('../../internals/path');

module.exports = path.Iterator;

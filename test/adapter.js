window.assert = require('assertive-chai').assert;
if (require('is-ie8')()) require('rangy').shim();
require('dom-node-iterator/shim')()
fixture.setBase('test/fixtures');

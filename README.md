# XPath Range

[![Build Status](https://travis-ci.org/openannotation/xpath-range.svg?branch=master)](https://travis-ci.org/openannotation/xpath-range)
[![NPM Package](https://img.shields.io/npm/v/xpath-range.svg)](https://www.npmjs.com/package/xpath-range)
[![Coverage](https://img.shields.io/codecov/c/github/openannotation/xpath-range/master.svg)](https://codecov.io/gh/openannotation/xpath-range)

This module is for describing and resolving a DOM `Range` using XPath.

## Installation

Using npm:

    npm install xpath-range

## Usage

The module provides functions for converting to and from DOM Range objects
using a combination of XPath expressions and text offsets.

The presence of a working XPath evaluator is not strictly required. Without it,
the library will only support XPath expressions that use a child axis and
node names with number literal positions. All XPath expressions generated by
this library fit this description. For instance, the library can generate and
consume an expression like `/html/body/article/p[3]`.

### API

#### `fromRange(range, [root])`

Convert a `Range` to a pair of XPath expressions and offsets.

If the optional parameter `root` is supplied, the computed XPath expressions
will be relative to it.

Returns an object with the following properties:

  - start
  - startOffset
  - end
  - endOffset

#### `toRange(start, startOffset, end, endOffset, [root])`

Construct a `Range` from the given XPath expressions and offsets.

If the optional parameter `root` is supplied, the XPath expressions are
evaluated as relative to it.

Returns a `Range` object.

## Compatibility

This library should work with any browser implementing basic `Range` support.

### Internet Explorer version 8

- Basic support can be achieved with the [rangy][] shim.
- There is no support for namespaces in X(HT)ML documents (issue #17).

## Community

Originally, this code was part of the
[Annotator](http://annotatorjs.org/) project.

Any discussion should happen on the
[annotator-dev](https://lists.okfn.org/mailman/listinfo/annotator-dev) mailing
list.

## Development

To contribute, fork this repository and send a pull request with your changes,
including any necessary test and documentation updates.

## Testing

You can run the command-line test suite by executing `npm test`.

To run the test suite, install the karma test runner with the command
`npm install -g karma-cli` and then run `karma start`. Karma will print
instructions for debugging the tests in a browser.

  [rangy]: https://github.com/timdown/rangy "rangy"

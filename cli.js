#! /usr/bin/env node

'use strict';

var meow = require('meow');
var project = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ new <project-name>',
    '',
    'Example',
    '  $ new hello-world'
  ].join('\n')
}, {
  string: ['_']
});

function errHandler(err) {
  if (err) {
    throw err;
  }
}

try {
  project(cli.input[0], errHandler);
} catch (err) {
  errHandler(err);
}

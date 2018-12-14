/// <reference path="../src/Functions.ts" />

import fs = require('fs');
import vm = require('vm');

let path = __dirname + "/../bin/js/Functions.js";
let code = fs.readFileSync(path, {encoding:'utf8'});
vm.runInThisContext(code);

describe('Functions', function() {
  it('hello', function() {
    const result = hello();
    expect(result).toBe('Hello World!');
  });
});

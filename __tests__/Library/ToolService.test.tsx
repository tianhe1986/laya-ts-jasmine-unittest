/// <reference path="../../src/Library/ToolService.ts" />

import fs = require('fs');
import vm = require('vm');
let path = __dirname + "/../../bin/js/Library/ToolService.js";
let code = fs.readFileSync(path, {encoding:'utf8'});
vm.runInThisContext(code);

describe('ToolService', function() {
  it('sum one', function() {
    expect(Library.ToolService.sum(0 ,0)).toBe(0);
  });

  it('sum two', () => {
    expect(Library.ToolService.sum(1, 2)).toBe(3);
  });
});
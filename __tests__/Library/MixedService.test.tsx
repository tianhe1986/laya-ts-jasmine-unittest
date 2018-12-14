/// <reference path="../../src/Library/MixedService.ts" />

import fs = require('fs');
import vm = require('vm');
let paths:Array<string> = [
    __dirname + "/../../bin/js/Library/ToolService.js",
    __dirname + "/../../bin/js/Library/UserService.js",
    __dirname + "/../../bin/js/Library/MixedService.js"
];

for (let i = 0, len = paths.length; i < len; i++) {
    let code = fs.readFileSync(paths[i], {encoding:'utf8'});
    vm.runInThisContext(code);
}

describe('MixedService', function() {
  it('calcu one', function() {
    let mixedService = new Library.MixedService();
    expect(mixedService.calcu(8, 5)).toBe(39);
  });

  it('calcu two', () => {
    let mixedService = new Library.MixedService();
    expect(mixedService.calcu(6, 10)).toBe(-64);
  });
});
/// <reference path="../../src/Library/InterService.ts" />

import fs = require('fs');
import vm = require('vm');
let paths:Array<string> = [
    __dirname + "/../../bin/js/Library/InterService.js",
    __dirname + "/../../bin/js/Library/RecuService.js"
];

for (let i = 0, len = paths.length; i < len; i++) {
    let code = fs.readFileSync(paths[i], {encoding:'utf8'});
    vm.runInThisContext(code);
}

describe('InterService', function() {
  it('test one', function() {
    let interService = new Library.InterService();
    expect(interService.test(8, 5)).toBe(6);
  });

  it('test two', () => {
    let interService = new Library.InterService();
    expect(interService.test(73, 56)).toBe(34);
  });
});